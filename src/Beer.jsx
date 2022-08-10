import React from 'react';
import { useLocation } from 'react-router-dom';
import { getAllBeerInformation } from './api';
import BeerItem from './components/BeerItem';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';

export default function Beer() {
  const location = useLocation();
  const beerInformation = getAllBeerInformation(location.state.data);

  return (
    // <div className="Menu">
    <DefaultLayout backButtonName="Назад" backLinkName={`../menu/${beerInformation.category.toLowerCase()}`} backData={beerInformation.category}>
      <BeerItem beer={beerInformation} />
      {/* <ButtonBack
      name="Назад"
      linkName="../menu/beer-list"
      data={beerInformation.category}
      /> */}
      {/* Нужно снова делать запрос или можно вернуться к результатам запроса */}
    </DefaultLayout>
    // </div>
  );
}
