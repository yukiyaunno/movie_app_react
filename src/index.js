import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CookiesProvider>
      {/* 新しい書き方 */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/youtube" element={<App />} />
      </Routes>
    </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
