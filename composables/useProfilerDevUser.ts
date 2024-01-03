import { get, map, chunk, first, orderBy, union, size, includes, isEmpty, truncate } from 'lodash';
import { useUserStore } from '@/stores/user';
import { extractSocialNetworks, getAvatar, getKeysMapped, getNameUser, getUserFavicon } from '~/utils/user-mapping';
import { getStringByCriteria, selectFirstWithValue } from '~/utils';
import { IS_PORTFOLIO } from '~/lib/constants';

export const useProfilerDevUser = () => {
    const { getUserByUsername } = useUserStore();

    const getProfilerDevUser = async (username: string, baseUser: object, userBioArray: string[], isPreview?: boolean) => {
        const user: User = { ...baseUser };
        const userData = await getUserByUsername(username);
        user.primaryColor = get(userData, 'primaryColor', null);
        user.avatar = isPreview ? getAvatar(userData) : getAvatar(user);
        user.favicon = isPreview ? get(userData, 'favicon') : getUserFavicon(user);
        user.name = get(userData, 'name') || getNameUser(user) || '';
        user.readme = get(userData, 'readme', get(user, 'github.readme', ''));
        user.email = get(userData, 'email', null);
        user.username = toLowerCase(username);
        user.ga = get(userData, 'ga', null);
        user.repos = selectFirstWithValue(get(userData, 'repos'), get(user, 'github.repos', []));
        user.shortBio =
            truncate(get(userData, 'shortBio', getStringByCriteria(userBioArray, 'shortest')), {
                length: 120,
            }) || '';
        user.largeBio = get(userData, 'largeBio', getStringByCriteria(userBioArray)) || '';
        user.hasGithub = isPreview
            ? get(userData, 'hasGithub', false)
            : !isEmpty(get(user, 'github.login'));
        user.hasRepos = size(user.repos) > 0;
        user.hasHashnode = isPreview
            ? get(userData, 'hasHashnode', false)
            : !isEmpty(get(user, 'hashnode.name'));
        user.hasDevto = isPreview
            ? get(userData, 'hasDevto', false)
            : !isEmpty(get(user, 'devto.username'));
        user.hasReadme =
            !isEmpty(get(user, 'readme')) &&
            !includes(get(user, 'readme'), 'Invalid') &&
            !includes(get(user, 'readme'), '404');
        user.showAbout = get(userData, 'showAbout', user.hasReadme);
        user.showRepos = get(userData, 'showRepos', user.hasRepos);
        // user.links = isPreview ? get(userData, 'links') : getKeysMapped(extractSocialNetworks(user));
        try {
            if (IS_PORTFOLIO || isPreview) {
                user.posts = get(userData, 'posts');
            } else {
                // user.posts = await buildPosts(user);
            }
            user.hasPosts = user.posts && user.posts.length > 0;
            // user.showBlog = get(userData, 'showBlog', user.hasPosts);
        } catch (error) {
            console.error(error);
            user.hasPosts = false;
            user.posts = [];
        }
        if (IS_PORTFOLIO || isPreview) {
            // await markAsActivePortfoio(user);
        } else {
            // await upsertUser(cleanAttrs(user, ['github', 'hashnode', 'devto']));
        }
        return user;
    }

    return {
        getProfilerDevUser
    }
}