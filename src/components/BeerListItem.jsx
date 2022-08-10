import React from 'react';
import ButtonBeerName from './ButtonBeerName';
import beerSign from '../images/empty-beer-photo.svg';

function BeerListItem(props) {
  const beerProps = props;
  const beer = beerProps.beer;
  let beerImage = null;
  let inStock = true;
  if (!beer.image) {
    beerImage = beerSign;
  } else {
    beerImage = beer.image;
  }
  if (!(beer.amount > 0)) {
    inStock = false;
    // add disabled links
  }
  return (
    <div className="BeerListBox">
      <img alt="Beer" src={beerImage} className="BeerListImage" />
      <div className="BeerShortDescBox">
        <ButtonBeerName
          name={beer.name}
          linkName="./beer"
          data={beer.id}
          value={inStock}
        />
        <p className="BeerShortDesc">
          {`${beer.manufacturer} (${beer.country}) | ${beer.alco} | ${beer.strength}`}
        </p>
      </div>
    </div>
  );
}

export default BeerListItem;
