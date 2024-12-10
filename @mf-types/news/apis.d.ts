
    export type RemoteKeys = 'news/News';
    type PackageType<T> = T extends 'news/News' ? typeof import('news/News') :any;