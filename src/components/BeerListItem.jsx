import React from 'react';
import ButtonBeerName from './ButtonBeerName';
import beerSign from '../images/empty-beer-photo.svg';

function BeerListItem(props) {
  const beerProps = props;
  const beer = beerProps.beer;
  const beerImage = beer.image || beerSign;
  const inStock = beer.amount > 0;
  return (
    <div className="BeerListBox">
      <img alt="Beer" src={beerImage} className="BeerListImage" style={{ opacity: inStock ? '1' : '0.5' }} />
      <div className="BeerShortDescBox">
        <ButtonBeerName
          buttonProps={{
            name: beer.name,
            linkName: beer.id,
            data: beer.id,
            value: inStock,
          }}
        />
        <p className="BeerShortDesc" style={{ opacity: inStock ? '1' : '0.5' }}>
          {`${beer.manufacturer} (${beer.country}) | ${beer.alco} | ${beer.strength}`}
        </p>
      </div>
    </div>
  );
}

export default BeerListItem;
