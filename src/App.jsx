import React from 'react';
import ButtonMenu from './components/ButtonMenu';
import logoName from './images/logo-name.svg';
import logoCircle from './images/circle-logo.svg';
// import classes from './components/style.css';

function App() {
  return (
    <div className="App">
      <img alt="bar logo circle" src={logoCircle} className="LogoCircle" />
      <img alt="bar logo name" src={logoName} className="BarLogoName" />
      <p className="EmptyP" />
      <div className="Menu">
        <div>
          <ButtonMenu name="Меню" linkName="/menu" />
        </div>
        <div>
          <ButtonMenu name="О нас" linkName="./about_us" />
        </div>
        <div>
          <ButtonMenu name="Контакты" linkName="./contacts" />
        </div>
      </div>
    </div>
  );
}

export default App;
