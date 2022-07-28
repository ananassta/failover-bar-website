import React from 'react';
import ButtonMenu from './ButtonMenu';
import beerSign from '../images/empty-beer-photo.svg';

function BeerListItem(props) {
  const beerProps = props;
  const beer = beerProps.beer;
  let beerImage = null;
  if (!beer.image) {
    beerImage = beerSign;
  } else {
    beerImage = beer.image;
  }
  return (
    <div>
      <img alt="Beer" src={beerImage} />
      <ButtonMenu
        name={beer.name}
        linkName="./beer"
        data={beer.id}
      />
      <p>
        {`${beer.manufacturer}`}
      </p>
      <p>
        {`${beer.alco} | ${beer.strength}`}
      </p>
    </div>
  );
}

export default BeerListItem;
