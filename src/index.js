import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import ThreeJSBackground from './components/ThreeJS/ThreeJSBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThreeJSBackground/> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
