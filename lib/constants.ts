import { isEmpty } from "lodash";

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_GENERATOR = process.env.NEXT_PUBLIC_GENERATOR_MODE === 'true';
export const IS_PORTFOLIO = !IS_GENERATOR && !isEmpty(process.env.NEXT_PUBLIC_USERNAME);
export const SITE_URL = 'https://profiler.dev/';
export const API_URL = IS_PRODUCTION ? `${SITE_URL}api` : 'http://localhost:3000/api';
export const GITHUB_URL = 'https://github.com/';
export const GITHUB_API_URL = 'https://api.github.com';
export const GITHUB_USER_URL = `${GITHUB_API_URL}/users/`;
export const GITHUB_README_URL = 'https://raw.githubusercontent.com/';
export const AVATAR_GENERATOR_URL = 'https://avatars.dicebear.com/4.5/api/initials/';
export const FAVICON_URL = 'https://icons.duckduckgo.com/ip3/';
