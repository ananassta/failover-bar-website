import * as React from 'react';
import ButtonBack from '../ButtonBack/ButtonBack';
import styles from './Header.module.css';
import logoName from '../../images/header.svg';

type HeaderProps = {
  name: string
}

export default function Header({ name }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.back}>
        <ButtonBack name={name} />
      </div>
      <img alt="bar-logo-name" src={logoName} className={styles['bar-logo-name-header']} />
    </div>
  );
}
