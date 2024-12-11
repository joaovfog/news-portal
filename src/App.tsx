import React, { Suspense } from "react";

const News = React.lazy(() => import("news/News"));
const Weather = React.lazy(() => import("weather/Weather"));

const App: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl font-bold text-center mt-4">
            Bem-vindo ao nosso portal de notícias
          </h1>
          <p className="text-xl text-center mt-4">
            Mantenha-se informado com as últimas notícias, actualizações
            meteorológicas e ofertas exclusivas dos nossos patrocinadores.
          </p>
        </div>

        <Suspense fallback={<div>Carregando...</div>}>
          <News />
          <Weather />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
