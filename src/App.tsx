import React, { Suspense } from 'react';

const News = React.lazy(() => import('news/News')); // Importação do módulo remoto
const Ads = React.lazy(() => import('ads/Ads')); // Importação do módulo remoto
const Sponsors = React.lazy(() => import('sponsors/Sponsors')); // Importação do módulo remoto
const Weather = React.lazy(() => import('weather/Weather')); // Importação do módulo remoto

const App: React.FC = () => {
  return (
    <div>
      <h1>Portal de Notícias</h1>
      <Suspense fallback={<div>Carregando...</div>}>
        <News /> {/* Renderiza o componente News do micro-frontend */}
        <Ads /> {/* Renderiza o componente News do micro-frontend */}
        <Sponsors /> {/* Renderiza o componente News do micro-frontend */}
        <Weather /> {/* Renderiza o componente News do micro-frontend */}
      </Suspense>
    </div>
  );
};

export default App;
