import React from 'react';
import Header from '../Header/Header';
import styles from './styles.module.css';

export default function DefaultLayout({
  backButtonName,
  backLinkName,
  backData,
  children,
}) {
  const beerItemStyle = backData ? { gridTemplateColumns: 'repeat(1,1fr)' } : {};
  return (
    <div className={styles['default-layout']}>
      <Header backButtonName={backButtonName} backLinkName={backLinkName} backData={backData} />
      <div className={styles['menu-layout']} style={beerItemStyle}>
        {children}
      </div>
    </div>
  );
}
