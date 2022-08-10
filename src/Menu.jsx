import React from 'react';
import ButtonMenu from './components/ButtonMenu';
import { getAllCategories } from './api';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';

export default function Menu() {
  const allCategories = getAllCategories();
  return (
    //   <div className="Menu">
    <DefaultLayout backButtonName="Назад" backLinkName="../">
      {allCategories.map((categ) => (
        <ButtonMenu
          name={categ.title}
          linkName={`${categ.title.toLowerCase()}`}
          key={categ.id}
          data={categ.title}
        />
      ))}
    </DefaultLayout>
    //   </div>
  );
}
