import React from 'react';
import ButtonMenu from './ButtonMenu';

function BeerListItem(props) {
  const beerProps = props;
  const beer = beerProps.beer;
  return (
    <div>
      <img alt="Beer" />
      <ButtonMenu
        name={beer.name}
        linkName="./beer"
        data={beer.id}
      />
      <p>
        {`${beer.alco} | ${beer.strength}`}
      </p>
    </div>
  );
}

export default BeerListItem;
