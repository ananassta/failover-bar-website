import React from 'react';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './styles.module.css';

export default function DefaultLayout() {
  const location = useLocation();
  const beerItemStyle = location.state.beerId ? { gridTemplateColumns: 'repeat(1,1fr)' } : {};
  return (
    <div className={styles['default-layout']}>
      <Header name={location.state.data} />
      <div className={styles['menu-layout']} style={beerItemStyle}>
        <Outlet />
      </div>
    </div>
  );
}
