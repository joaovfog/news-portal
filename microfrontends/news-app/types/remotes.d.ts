declare module 'ads/Ads' {
    interface AdsProps {
        title: string;
        description: string;
    }

    const Ads: React.ComponentType<AdsProps>;
    export default Ads;
}

declare module 'sponsors/Sponsors' {
    interface SponsorsProps {
        name: string;
        promotion: string;
    }

    const Sponsors: React.ComponentType<SponsorsProps>;
    export default Sponsors;
}
