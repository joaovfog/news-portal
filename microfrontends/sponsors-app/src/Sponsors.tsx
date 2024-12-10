import React, { useState } from "react";
import { mockSponsors } from "./mock";
import Sponsor from "./Sponsor";

const Sponsors: React.FC = () => {
  const [sponsors] = useState(mockSponsors);

  return (
    <div>
      {sponsors.map((sponsor, i) => (
        <Sponsor
          key={i}
          name={sponsor.name}
          description={sponsor.description}
        />
      ))}
    </div>
    // <section className="mb-8">
    //   <h2 className="text-xl font-bold mb-4">Nossos patrocinadores</h2>

    //   <div className="flex flex-wrap gap-4">
    //     {sponsors.map((sponsor) => (
    //       <div key={sponsor.id} className="text-center">
    //         <img
    //           src={sponsor.logo}
    //           alt={sponsor.name}
    //           className="mx-auto mb-2"
    //         />
    //         <p>{sponsor.name}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
};

export default Sponsors;
