import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Menu from './Menu';
// import { browserHistory } from "react-router";
import BeerList from './BeerList';
import Beer from './Beer';
import './components/style.css';
import './fonts/Raleway-VariableFont_wght.ttf';

// eslint-disable-next-line import/prefer-default-export
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:beerlist" element={<BeerList />} />
        <Route path="menu/:beerlist/:beer" element={<Beer />} />
      </Routes>
    </BrowserRouter>
  );
}
