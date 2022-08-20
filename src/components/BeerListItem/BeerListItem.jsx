import React from 'react';
import ButtonBeerName from '../ButtonBeerName/ButtonBeerName';
import beerSign from '../../images/empty-beer-photo.svg';
import styles from './BeerListItem.module.css';

function BeerListItem({ beer }) {
  const beerImage = beer.image || beerSign;
  const inStock = beer.amount > 0;
  return (
    <div className={styles['beer-list-box']}>
      <img alt="Beer" src={beerImage} className={styles['beer-list-image']} style={{ opacity: inStock ? '1' : '0.5' }} />
      <div className={styles['beer-short-desc-box']}>
        <ButtonBeerName
          buttonProps={{
            name: beer.name,
            linkName: beer.id,
            data: beer.id,
            value: inStock,
          }}
        />
        <p className={styles['beer-short-desc']} style={{ opacity: inStock ? '1' : '0.5' }}>
          {`${beer.manufacturer} (${beer.country}) | ${beer.alco} | ${beer.strength}`}
        </p>
      </div>
    </div>
  );
}

export default BeerListItem;
