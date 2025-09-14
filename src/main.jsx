import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header';
import Hero from './Hero';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


