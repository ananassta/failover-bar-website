import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllBeersForCategory, LocationStateType, BeerType } from '../../lib/index';
import BeerListItem from '../../components/BeerListItem/BeerListItem';
import { getStyles } from './styles';

export default function BeerList() {
  const location = useLocation();
  const locationState: LocationStateType = location.state;
  const allBeers = getAllBeersForCategory(locationState.data);
  return (
    <>
      {allBeers.map((beer: BeerType) => (
        <Link
          to={beer.id}
          state={{ beerId: beer.id }}
          style={getStyles(beer.amount > 0)}
          key={beer.id}
        >
          <BeerListItem beer={beer} key={beer.id} />
        </Link>
      ))}
    </>
  );
}
