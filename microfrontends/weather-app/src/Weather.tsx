import React, { useEffect, useState } from "react";
import { mockWeather, weatherProducts } from "./mock";

const Ads = React.lazy(() => import("ads/Ads"));

const Weather: React.FC = () => {
  const [weather, setWeather] = useState(mockWeather);
  const [products, setProducts] = useState<typeof weatherProducts.sunny>([]);

  useEffect(() => {
    setWeather(mockWeather);
  }, []);

  useEffect(() => {
    setProducts(
      weatherProducts[weather.condition as keyof typeof weatherProducts] || []
    );
  }, [weather]);

  return (
    <div className="space-y-8 mt-16 text-center">
      <h1 className="text-3xl font-bold">Previsão do tempo</h1>

      <div className="flex items-center gap-4 justify-center">
        <div className="mb-4">
          <p>Condição: {weather.condition === 'rainy' ? 'tempo chuvoso' : 'tempo ensolarado'}</p>
          <p>Temperatura: {weather.temperature}°C</p>
        </div>
        <ul className="flex gap-4">
          {products.map((product) => (
            <li key={product.id} className="mb-2">
              <Ads title={product.name} description="" price={product.price} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Weather;
