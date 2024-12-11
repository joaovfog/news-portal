declare module 'ads/Ads' {
    interface AdsProps {
        title: string;
        description?: string;
        price: string;
    }

    const Ads: React.ComponentType<AdsProps>;
    export default Ads;
}
