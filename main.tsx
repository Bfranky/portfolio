import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './Portfolio';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  );
}
