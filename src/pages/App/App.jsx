import React from 'react';
import ButtonMenu from '../../components/ButtonMenu/ButtonMenu';
import logoName from '../../images/logo-name.svg';
import logoCircle from '../../images/circle-logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <img alt="bar logo circle" src={logoCircle} className={styles['logo-circle']} />
      <img alt="bar logo name" src={logoName} className={styles['bar-logo-name']} />
      <div className={styles.menu}>
        <ButtonMenu buttonProps={{ name: 'Меню', linkName: '/menu' }} />
        <ButtonMenu buttonProps={{ name: 'О нас', linkName: './about_us' }} />
        <ButtonMenu buttonProps={{ name: 'Контакты', linkName: './contacts' }} />
      </div>
    </div>
  );
}

export default App;
