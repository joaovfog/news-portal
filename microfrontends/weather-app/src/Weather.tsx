import React, { useEffect, useState } from "react";
import { mockWeather, weatherProducts } from "./mock";

const Weather: React.FC = () => {
  const [weather, setWeather] = useState(mockWeather);
  const [products, setProducts] = useState<typeof weatherProducts.rainy>([]);

  useEffect(() => {
    setWeather(mockWeather);
  }, []);

  useEffect(() => {
    setProducts(
      weatherProducts[weather.condition as keyof typeof weatherProducts] || []
    );
  }, [weather]);

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Previsão do tempo</h2>

      <div className="mb-4">
        <p>Condition: {weather.condition}</p>
        <p>Temperature: {weather.temperature}°C</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Produtos recomendados:</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="mb-2">
              {product.name} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Weather;
