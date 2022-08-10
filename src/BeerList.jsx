import React from 'react';
import { useLocation } from 'react-router-dom';
import { getAllBeersForCategory } from './api';
import BeerListItem from './components/BeerListItem';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';

export default function BeerList() {
  const location = useLocation();
  const allBeers = getAllBeersForCategory(location.state.data);
  return (
    // <div className="Menu">
    <DefaultLayout backButtonName={location.state.data} backLinkName="../menu">
      {/* <h1 style={{ textAlign: 'center', fontFamily: 'Raleway', fontSize: '25px' }}>
      {`${location.state.data}`}
      </h1> */}
      {allBeers.map((beer) => (
        <BeerListItem beer={beer} key={beer.id} />
      ))}
    </DefaultLayout>
    // <ButtonBack name={location.state.data} linkName="../menu" />
    // </div>
  );
}
