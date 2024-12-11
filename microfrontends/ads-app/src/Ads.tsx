import Ad from "./Ad";

interface AdsProps {
  id?: number
  title?: string
  description?: string
  price?: string
}

const Ads: React.FC<AdsProps> = ({ id, title = 'Título', description = 'Descrição', price }: AdsProps) => {
  return (
    <div className="space-y-8 w-full">
      <Ad key={id} title={title} description={description} price={price} />
    </div>
  );
};

export default Ads;
