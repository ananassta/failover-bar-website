import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App/App';
import Menu from '../Menu/Menu';
import BeerList from '../BeerList/BeerList';
import Beer from '../Beer/Beer';
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';

// eslint-disable-next-line import/prefer-default-export
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<DefaultLayout />}>
          <Route path="menu" element={<Menu />} />
          <Route path="menu/:beerlist" element={<BeerList />} />
          <Route path="menu/:beerlist/:beer" element={<Beer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
