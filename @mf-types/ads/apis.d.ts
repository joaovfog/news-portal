
    export type RemoteKeys = 'ads/Ads';
    type PackageType<T> = T extends 'ads/Ads' ? typeof import('ads/Ads') :any;