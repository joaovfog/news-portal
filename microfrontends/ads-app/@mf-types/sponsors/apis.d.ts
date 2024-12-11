
    export type RemoteKeys = 'sponsors/Sponsors';
    type PackageType<T> = T extends 'sponsors/Sponsors' ? typeof import('sponsors/Sponsors') :any;