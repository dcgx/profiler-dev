import { isEmpty } from "lodash";

export const isEnabledUser = (user) => {
  if (isEmpty(user)) return false;
  if (!user.hasGithub && !user.hasHashnode) {
    return false;
  }
  return true;
};
