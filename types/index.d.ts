type BuildUserParams = {
    username: string;
    isPreview?: boolean;
}

type FullFillUserParams = {
    username: string;
    github: GithubUser;
    hashnode: object;
    devto: object
}

type BaseUser = {
    github: GithubUser;
    hashnode?: object | null | undefined;
    devto?: object | null | undefined;
}

type User = {
    primaryColor?: string | null;
    avatar?: string;
    favicon?: string | null;
    name?: string;
    readme?: string;
    email?: string | null;
    username?: string;
    ga?: string | null;
    repos?: object[];
    shortBio?: string;
    largeBio?: string;
    hasGithub?: boolean;
    hasRepos?: boolean;
    hasHashnode?: boolean;
    hasDevto?: boolean;
    hasReadme?: boolean;
    hasPosts?: boolean;
    showBlog?: boolean;
    showAbout?: boolean;
    showRepos?: boolean;
    links?: object | null;
    posts?: object[];
}

type GithubUser = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    limited?: boolean;
    readme?: string | null;
    repos?: object[];
}