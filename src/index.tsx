import React, { lazy, StrictMode } from 'react';
const App = lazy(() => import('./components/App'));
import { createRoot } from 'react-dom/client';
import './global.scss';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
