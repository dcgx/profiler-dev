import { orderBy } from "lodash";
import { GITHUB_API_URL, GITHUB_USER_URL } from "@/lib/constants";
import { getGithubReadmeURL } from "~/utils/user-mapping";

export const useGithub = () => {
    const getGithubUser = async (username: string) => {
        const response = await fetch(`${GITHUB_USER_URL}${username}`);
        return await response.json();
    }

    const getRepos = async (username: string): Promise<object[]> => {
        try {
            const response = await fetch(`${GITHUB_USER_URL}${username}/repos?per_page=100`);
            if (response.status === 404 || response.status === 403) {
                return [];
            }
            const repos = await response.json();
            const orderedRepos = orderBy(repos, ['stargazers_count'], ['desc']);
            return orderedRepos;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    const getUserReadme = async (username: string): Promise<string | null> => {
        const branches = ['main', 'master'];
        const names = ['README.md', 'Readme.md', 'readme.md'];
        let readmeFound = false;
        let githubReadmeData = null;
        try {
            // eslint-disable-next-line no-restricted-syntax
            for (const branch of branches) {
                // eslint-disable-next-line no-restricted-syntax
                for (const fileName of names) {
                    if (!readmeFound) {
                        // eslint-disable-next-line no-await-in-loop
                        const githubReadmeRes = await fetch(getGithubReadmeURL(username, branch, fileName));
                        // eslint-disable-next-line no-await-in-loop
                        githubReadmeData = await githubReadmeRes.text();
                        readmeFound = !githubReadmeData.includes('404');
                    }
                }
            }
            return githubReadmeData;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    const getIsGithubRateLimited = async (showLimit = false) => {
        try {
            const response = await fetch(`${GITHUB_API_URL}/rate_limit`);
            const limit = await response.json();
            if (showLimit) {
                return limit;
            }
            if (limit.resources.core.remaining < 1) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    return {
        getGithubUser,
        getRepos,
        getUserReadme,
        getIsGithubRateLimited
    }
}