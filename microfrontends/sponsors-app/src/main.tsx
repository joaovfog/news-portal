import React from 'react';
import { createRoot } from 'react-dom/client';
import Sponsors from './Sponsors';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Sponsors />
  </React.StrictMode>
);
