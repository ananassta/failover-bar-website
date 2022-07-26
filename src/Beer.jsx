import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './components/ButtonMenu';
import { getAllBeerInformation } from './api';
import BeerItem from './components/BeerItem';
import logoName from './images/bar-logo-name.png';

export default function Beer() {
  const location = useLocation();
  const beerInformation = getAllBeerInformation(location.state.data);
  return (
    <div className="Menu">
      <img alt="bar-logo-name" src={logoName} className="BarLogoName" />
      <BeerItem beer={beerInformation} />
      <Button
        name="Назад"
        linkName="../menu/beer-list"
        data={beerInformation.category}
      />
      {/* Нужно снова делать запрос или можно вернуться к результатам запроса */}
    </div>
  );
}
