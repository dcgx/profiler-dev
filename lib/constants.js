export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const SITE_URL = 'https://profiler.dev/';
export const API_URL = IS_PRODUCTION ? `${SITE_URL}api` : 'http://localhost:3000/api';
export const GITHUB_URL = 'https://github.com/';
export const GITHUB_API_URL = 'https://api.github.com';
export const GITHUB_USER_URL = `${GITHUB_API_URL}/users/`;
export const GITHUB_README_URL = 'https://raw.githubusercontent.com/';