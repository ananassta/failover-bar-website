import React from 'react';
import ButtonBack from '../ButtonBack';
import styles from './styles.module.css';
import logoName from '../../images/header.svg';

export default function Header({ name }) {
  return (
    <div className={styles.header}>
      <div className={styles.back}>
        <ButtonBack name={name} />
      </div>
      <img alt="bar-logo-name" src={logoName} className={styles['bar-logo-name-header']} />
    </div>
  );
}
