import React from "react";

interface SponsorProps {
  name: string;
  description: string;
}

const Sponsor: React.FC<SponsorProps> = ({
  name,
  description,
}: SponsorProps) => {
  return (
    <div className="bg-green-100 p-4 rounded">
      <h3 className="font-semibold">{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Sponsor;
