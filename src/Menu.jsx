import React from 'react';
import ButtonMenu from './components/ButtonMenu';
import { getAllCategories } from './api';
import logoName from './images/bar-logo-name.png';

export default function Menu() {
  const allCategories = getAllCategories();

  return (
    // <DefaultLayout title={props.title} description={props.description} page="categories">
    <div>
      <div className="Menu">
        <img alt="bar-logo-name" src={logoName} className="BarLogoName" />
        {allCategories.map((categ) => (
          <ButtonMenu
            name={categ.title}
            linkName="./beer-list"
            key={categ.id}
            data={categ.title}
          />
        ))}
        <ButtonMenu name="Назад" linkName="../" />
      </div>
    </div>
    // </DefaultLayout>
  );
}
