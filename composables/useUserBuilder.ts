import { get, map, chunk, first, orderBy, union, size, includes, isEmpty, truncate } from 'lodash';
import { useProfilerDevUser } from './useProfilerDevUser';
import { useGithub } from './useGithub';
import { areSimilarStrings, cleanGithubUrl } from '~/utils';

export const useUserBuilder = () => {
    const { getProfilerDevUser } = useProfilerDevUser();
    const { getGithubUser, getUserReadme, getRepos, getIsGithubRateLimited } = useGithub();

    const applyValidations = (user: User): User => {
        const githubName = get(user, 'github.name');
        const devtoName = get(user, 'devto.name');
        const hashnodeName = get(user, 'hashnode.name');
        if (!isEmpty(githubName) && !isEmpty(devtoName) && !areSimilarStrings(githubName, devtoName)) {
            // eslint-disable-next-line no-param-reassign
            delete user.devto;
        }
        if (
            !isEmpty(githubName) &&
            !isEmpty(hashnodeName) &&
            !areSimilarStrings(githubName, hashnodeName, 0.5)
        ) {
            // eslint-disable-next-line no-param-reassign
            delete user.hashnode;
        }
        return user;
    };

    const fullfillUser = async ({ username, github, hashnode, devto }: FullFillUserParams) => {
        let user: User = {
            github,
            hashnode: {},
            devto: {},
        };
        if (!github.login) {
            let githubUsername = '';
            if (get(hashnode, 'socialMedia.github')) {
                githubUsername = cleanGithubUrl(get(hashnode, 'socialMedia.github'));
            } else if (get(devto, 'github_username')) {
                githubUsername = get(devto, 'github_username') ?? '';
            }
            user.github.login = githubUsername;
        }
        if (get(user, 'github.login')) {
            if (
                get(hashnode, 'socialMedia.github') !== get(user, 'github.login') &&
                !isEmpty(get(hashnode, 'socialMedia.github'))
            ) {
                user.github.login = cleanGithubUrl(get(hashnode, 'socialMedia.github'));
            }
            const githubUser = await getGithubUser(user.github.login);
            const githubReadmeData = await getUserReadme(user.github.login);
            const githubReposData = await getRepos(user.github.login);
            const githubLimited = await getIsGithubRateLimited();
            user.github = githubUser
            user.github.limited = githubLimited;
            user.github.readme = githubReadmeData;
            user.github.repos = githubReposData;
        }

        user = applyValidations(user);

        const userBioArray: string[] = [
            get(user, 'devto.summary') ?? '',
            get(user, 'github.bio') ?? '',
            get(user, 'hashnode.tagline') ?? '',
        ];
        const userData = await getProfilerDevUser(username, user, userBioArray);
        return userData;
    };


    const buildUser = async (params: BuildUserParams) => {
        let user = {};
        const { username, isPreview = false } = params;

        if (isPreview) {
            user = getProfilerDevUser(username, {}, [], true);
            return user;
        }
        const githubUser = await getGithubUser(username);
        // TODO: getDevtoUser
        // TODO: getHashnodeUser

        user = await fullfillUser({
            username,
            github: githubUser,
            hashnode: {},
            devto: {},
        });
        return user;
    }

    return {
        buildUser
    }
}