/// <reference types="vite/client" />

// @ts-ignore: suppress "Cannot find module 'react'" if types are not installed
import {StrictMode} from 'react';
// @ts-ignore: react-dom/client types may be unavailable in the current environment
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
