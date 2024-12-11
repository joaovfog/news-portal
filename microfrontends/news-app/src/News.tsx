import React, { useState } from "react";

import { mockNews } from "./mock";
import NewsItem from "./NewsItem";

const News: React.FC = () => {
  const [news] = useState(mockNews);

  return (
    <div className="space-y-8 mt-16">
      <h1 className="text-3xl font-bold">Últimas notícias</h1>
      <div className="grid grid-cols-2 gap-4">
        {news.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default News;
