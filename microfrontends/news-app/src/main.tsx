import React from 'react';
import { createRoot } from 'react-dom/client';
import News from './News';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <News />
  </React.StrictMode>
);
