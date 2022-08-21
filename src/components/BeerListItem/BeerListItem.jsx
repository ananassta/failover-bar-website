import React from 'react';
import beerSign from '../../images/empty-beer-photo.svg';
import styles from './BeerListItem.module.css';

function BeerListItem({ beer }) {
  const beerImage = beer.image || beerSign;
  return (
    <div className={styles['beer-list-box']}>
      <img alt="Beer" src={beerImage} className={styles['beer-list-image']} />
      <div className={styles['beer-short-desc-box']}>
        <p className={styles['beer-list-name']}>{beer.name}</p>
        <p className={styles['beer-short-desc']}>
          {`${beer.manufacturer} (${beer.country}) | ${beer.alco} | ${beer.strength}`}
        </p>
      </div>
    </div>
  );
}

export default BeerListItem;
