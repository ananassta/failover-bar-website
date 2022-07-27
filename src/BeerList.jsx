import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonMenu from './components/ButtonMenu';
import { getAllBeersForCategory } from './api';
import BeerListItem from './components/BeerListItem';
import logoName from './images/bar-logo-name.png';

export default function BeerList() {
  const location = useLocation();
  const allBeers = getAllBeersForCategory(location.state.data);
  return (
    // <DefaultLayout title={props.title} description={props.description}>
    <div>
      <div className="Menu">
        <img alt="bar-logo-name" src={logoName} className="BarLogoName" />
        <h1 style={{ textAlign: 'center', fontFamily: 'Raleway', fontSize: '25px' }}>
          {`${location.state.data}`}
        </h1>
        {allBeers.map((beer) => (
          <BeerListItem beer={beer} key={beer.id} />
        ))}
        <ButtonMenu name="Назад" linkName="../menu" />
      </div>
    </div>
    // </DefaultLayout>
  );
}
