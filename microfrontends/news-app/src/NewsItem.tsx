import React from "react";

const Ads = React.lazy(() => import("ads/Ads"));

interface NewsItemProps {
  news: {
    id: number;
    title: string;
    content: string;
  };
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <div className="border rounded-lg p-4 space-y-4 bg-white">
      <h2 className="text-2xl font-semibold">{news.title}</h2>
      <p>{news.content}</p>

      <div className="flex">
        <Ads />
        {/* <Sponsors /> */}
      </div>
    </div>
  );
};

export default NewsItem;
