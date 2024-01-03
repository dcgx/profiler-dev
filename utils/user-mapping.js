import { isEmpty } from "lodash";
import { AVATAR_GENERATOR_URL, GITHUB_README_URL } from "~/lib/constants";

export const getGithubReadmeURL = (
  username,
  branch = "main",
  fileName = "README.md"
) => {
  return `${GITHUB_README_URL}${username}/${username}/${branch}/${fileName}`;
};

export const getUserFavicon = (user) => {
  const userPrimaryColor = replace(theme?.brand?.primary, "#", "");
  if (has(user, "hashnode.publicationDomain")) {
    return getPageFavicon(get(user, "hashnode.publicationDomain"));
  }
  if (has(user, "hashnode.socialMedia.website")) {
    return getPageFavicon(get(user, "hashnode.socialMedia.website"));
  }
  if (has(user, "devto.website_url")) {
    return getPageFavicon(get(user, "devto.website_url"));
  }
  return `${AVATAR_GENERATOR_URL}${user.name}.svg?background=%23${userPrimaryColor}`;
};

export const getAvatar = (user) => {
  if (!user) return "";
  return get(
    user,
    "avatar",
    get(
      user,
      "github.avatar_url",
      get(
        user,
        "hashnode.photo",
        get(user, "devto.profile_image", "/default-avatar.png")
      )
    )
  );
};

export const getNameUser = (user) => {
  if (!user) return '';
  return user?.github?.name || user?.hashnode?.name || user?.devto?.name;
};

export const isEnabledUser = (user) => {
  if (isEmpty(user)) return false;
  if (!user.hasGithub && !user.hasHashnode) {
    return false;
  }
  return true;
};

export const getKeysMapped = (keys) => {
  if (!keys) return {};
  return Object.keys(keys)
    .map((key) => {
      if (keys[key] && key !== '__typename') {
        return { key, value: keys[key] };
      }
      return null;
    })
    .filter(Boolean);
};

export const extractSocialNetworks = (user) => {
  if (!user) return '';
  const socialMedia = { github: '', linkedin: '', hashnode: '', devto: '', twitter: '' };
  if (user.hasHashnode) {
    socialMedia.linkedin = get(user, 'hashnode.socialMedia.linkedin');
    socialMedia.twitter = get(user, 'hashnode.socialMedia.twitter');
    socialMedia.hashnode = `https://hashnode.com/@${get(user, 'username')}`;
  }
  if (user?.hasDevto) {
    socialMedia.devto = `https://dev.to/${get(user, 'username')}`;
  }
  if (user?.hasGithub) {
    socialMedia.github = get(user, 'github.html_url');
  }
  return socialMedia;
};
