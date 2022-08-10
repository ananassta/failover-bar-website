import React from 'react';
import ButtonBack from '../ButtonBack';
import styles from './styles.module.css';
import logoName from '../../images/header.svg';

export default function Header({ backButtonName, backLinkName, backData }) {
  return (
    <div className={styles.header}>
      <div className={styles.back}>
        <ButtonBack name={backButtonName} linkName={backLinkName} data={backData} />
      </div>
      <img alt="bar-logo-name" src={logoName} className={styles['bar-logo-name-header']} />
    </div>
  );
}
