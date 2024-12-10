
    export type RemoteKeys = 'weather/Weather';
    type PackageType<T> = T extends 'weather/Weather' ? typeof import('weather/Weather') :any;