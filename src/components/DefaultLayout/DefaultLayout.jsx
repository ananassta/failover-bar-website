import React from 'react';
import Header from '../Header/Header';
import styles from './styles.module.css';

export default function DefaultLayout({
  backButtonName,
  backLinkName,
  backData,
  children,
}) {
  return (
    <div className={styles['default-layout']}>
      <Header backButtonName={backButtonName} backLinkName={backLinkName} backData={backData} />
      {children}
    </div>
  );
}
