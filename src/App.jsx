import React from 'react';
import ButtonMenu from './components/ButtonMenu';
import logoName from './images/bar-logo-name.png';
// import './components/style.css';

function App() {
  return (
    <div className="App">
      <img alt="bar logo name" src={logoName} className="BarLogoName" />
      <p />
      <div className="Menu">
        <ButtonMenu name="Меню" linkName="/menu" />
        <ButtonMenu name="О нас" linkName="./about_us" />
        <ButtonMenu name="Контакты" linkName="./contacts" />
      </div>
    </div>
  );
}

export default App;
