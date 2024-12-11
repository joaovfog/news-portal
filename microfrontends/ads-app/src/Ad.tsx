import React from "react";

interface AdProps {
  title: string;
  description: string;
  price?: string
}

const Ad: React.FC<AdProps> = ({ title, description, price }: AdProps) => {
  return (
    <div className="bg-blue-100 p-4 rounded">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="mb-4">{description}</p>
      {price && <p>{price}</p>}
    </div>
  );
};

export default Ad;
