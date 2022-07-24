import Button from "./components/Button";
import React from "react";

function App() {
  return (
    <div className="App">
      <Button name='Меню' linkName='/menu'/>
      <Button name='О нас' linkName='./about_us'/>
      <Button name='Контакты' linkName='./contacts'/>
    </div>
  );
}

export default App;
