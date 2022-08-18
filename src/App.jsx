import React from 'react';
import ButtonMenu from './components/ButtonMenu/ButtonMenu';
import logoName from './images/logo-name.svg';
import logoCircle from './images/circle-logo.svg';

function App() {
  return (
    <div className="App">
      <img alt="bar logo circle" src={logoCircle} className="LogoCircle" />
      <img alt="bar logo name" src={logoName} className="BarLogoName" />
      <div className="Menu">
        <ButtonMenu buttonProps={{ name: 'Меню', linkName: '/menu' }} />
        <ButtonMenu buttonProps={{ name: 'О нас', linkName: './about_us' }} />
        <ButtonMenu buttonProps={{ name: 'Контакты', linkName: './contacts' }} />
      </div>
    </div>
  );
}

export default App;
