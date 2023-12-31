import { isEmpty } from "lodash";
import { GITHUB_README_URL } from "~/lib/constants";

export const getGithubReadmeURL = (
  username,
  branch = "main",
  fileName = "README.md"
) => {
  return `${GITHUB_README_URL}${username}/${username}/${branch}/${fileName}`;
};

export const isEnabledUser = (user) => {
  if (isEmpty(user)) return false;
  if (!user.hasGithub && !user.hasHashnode) {
    return false;
  }
  return true;
};
