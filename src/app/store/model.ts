
  export interface Author {
    login: string;
    color: number;
    sex: string;
    avatar: string;
  }

  export interface Embed {
    type: string;
    url: string;
    source: string;
    preview: string;
    plus18: boolean;
    animated: boolean;
    ratio: number;
    size: string;
  }

  export interface Post { 
    id: number;
    date: string;
    body: string;
    author: Author;
    blocked: boolean;
    favorite: boolean;
    vote_count: number;
    comments_count: number;
    status: string;
    user_vote: number;
    embed: Embed;
    app: string;
    tags? : string[]
  }

  export interface Pagination {
    next: string;
  }

  export interface Counters {
    total: number;
    entries: number;
    links: number;
  }

  export interface Meta {
    tag: string;
    is_observed: boolean;
    is_blocked: boolean;
    is_own: boolean;
    owner?: any;
    description: string;
    background: string;
    counters: Counters;
  }

  export interface RootObject {
    data: Post[];
    pagination: Pagination;
    meta: Meta;
  }

