import React from "react";

const Ads = React.lazy(() => import("ads/Ads"));
const Sponsors = React.lazy(() => import("sponsors/Sponsors"));

interface NewsItemProps {
  news: {
    id: number;
    title: string;
    content: string;
    products:
    {
      id: number;
      title: string;
      description: string;
    }[]
    sponsor: {
      name: string;
      promotion: string;
    }
  };
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <div className="border rounded-lg p-4 space-y-4 bg-white">
      <h2 className="text-2xl font-semibold">{news.title}</h2>
      <p>{news.content}</p>

      <div className="flex gap-4">
        {news.products.map((product) => <Ads key={product.id} title={product.title} description={product.description} />)}
      </div>

      <Sponsors name={news.sponsor.name} promotion={news.sponsor.promotion} />
    </div>
  );
};

export default NewsItem;
