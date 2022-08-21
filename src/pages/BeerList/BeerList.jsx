import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllBeersForCategory } from '../../lib';
import BeerListItem from '../../components/BeerListItem/BeerListItem';
import { getStyles } from './styles';

export default function BeerList() {
  const location = useLocation();
  const allBeers = getAllBeersForCategory(location.state.data);
  return (
    <>
      {allBeers.map((beer) => (
        <Link
          to={beer.id}
          state={{ beerId: beer.id }}
          style={getStyles(beer.amount > 0)}
        >
          <BeerListItem beer={beer} key={beer.id} />
        </Link>
      ))}
    </>
  );
}
