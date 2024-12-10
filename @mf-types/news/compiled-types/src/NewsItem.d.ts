import React from "react";
interface NewsItemProps {
    news: {
        id: number;
        title: string;
        content: string;
    };
}
declare const NewsItem: React.FC<NewsItemProps>;
export default NewsItem;
