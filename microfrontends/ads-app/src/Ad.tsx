import React from "react";

const Sponsors = React.lazy(() => import("sponsors/Sponsors"));

interface AdProps {
  title: string;
  description: string;
}

const Ad: React.FC<AdProps> = ({ title, description }: AdProps) => {
  return (
    <div className="bg-blue-100 p-4 rounded">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="mb-4">{description}</p>

      <Sponsors />
    </div>
  );
};

export default Ad;
