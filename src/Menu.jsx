import React from 'react';
import ButtonMenu from './components/ButtonMenu';
import { getAllCategories } from './api';

export default function Menu() {
  const allCategories = getAllCategories();
  return (
    <>
      {allCategories.map((categ) => (
        <ButtonMenu
          buttonProps={{
            linkName: categ.toLowerCase(),
            name: categ,
            data: categ,
          }}
          key={categ.id}
        />
      ))}
    </>
  );
}
