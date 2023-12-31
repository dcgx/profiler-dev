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

type User = {
    github: GithubUser;
    hashnode?: object | null | undefined;
    devto?: object | null | undefined;
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