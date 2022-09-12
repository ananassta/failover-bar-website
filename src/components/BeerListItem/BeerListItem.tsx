import * as React from 'react';
import { BeerType } from '../../lib/index';
import beerSign from '../../images/empty-beer-photo.svg';
import styles from './BeerListItem.module.css';

type BeerListItemProps = {
  beer: BeerType
}

function BeerListItem({ beer }: BeerListItemProps) {
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
