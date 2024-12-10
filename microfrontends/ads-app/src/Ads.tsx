import React, { useState } from "react";
import { mockAds } from "./mock";
import Ad from "./Ad";

const Ads: React.FC = () => {
  const [ads] = useState(mockAds);

  return (
    <div className="space-y-8">
      <div>
        {ads.map((ad, i) => (
          <Ad key={i} title={ad.title} description={ad.description} />
        ))}
      </div>
    </div>
    // <section className="mb-8">
    //   <h2 className="text-xl font-bold mb-4">Anúncios</h2>

    //   {ads.map((ad) => (
    //     <div key={ad.id} className="mb-4 p-4 bg-yellow-100 rounded">
    //       <h3 className="font-bold">{ad.title}</h3>
    //       <p>{ad.description}</p>
    //     </div>
    //   ))}
    // </section>
  );
};

export default Ads;
