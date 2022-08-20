import React from 'react';
import ButtonMenu from '../../components/ButtonMenu/ButtonMenu';
import { getAllCategories } from '../../lib';

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
          key={categ}
        />
      ))}
    </>
  );
}
