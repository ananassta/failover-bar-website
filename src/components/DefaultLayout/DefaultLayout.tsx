import * as React from 'react';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { LocationStateType } from '../../lib';
import styles from './DefaultLayout.module.css';

export default function DefaultLayout() {
  const location = useLocation();
  const locationState: LocationStateType = location.state;
  const beerItemStyle = locationState.beerId ? { gridTemplateColumns: 'repeat(1,1fr)' } : {};
  return (
    <div className={styles['default-layout']}>
      <Header name={locationState.data} />
      <div className={styles['menu-layout']} style={beerItemStyle}>
        <Outlet />
      </div>
    </div>
  );
}
