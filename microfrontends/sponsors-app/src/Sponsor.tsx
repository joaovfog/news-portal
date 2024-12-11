import React from "react";

interface SponsorProps {
  name: string;
  promotion: string;
}

const Sponsor: React.FC<SponsorProps> = ({
  name,
  promotion,
}: SponsorProps) => {
  return (
    <div className="bg-green-100 p-4 rounded">
      <h3 className="font-semibold">{name}</h3>
      <p>{promotion}</p>
    </div>
  );
};

export default Sponsor;
