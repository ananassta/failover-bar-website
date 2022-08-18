import React from 'react';
import { useLocation } from 'react-router-dom';
import { getAllBeersForCategory } from './api';
import BeerListItem from './components/BeerListItem/BeerListItem';

export default function BeerList() {
  const location = useLocation();
  const allBeers = getAllBeersForCategory(location.state.data);
  return (
    <>
      {allBeers.map((beer) => (
        <BeerListItem beer={beer} key={beer.id} />
      ))}
    </>
  );
}
