import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Menu from './Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeerList from './[BeerList]';
import Beer from './[Beer]';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
      <Route path='menu/beer-list' element={<BeerList />} />
      <Route path='menu/beer-list/beer' element={<Beer />} />
    </Routes>
  </BrowserRouter>
);


