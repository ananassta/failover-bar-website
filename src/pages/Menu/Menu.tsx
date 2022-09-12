import * as React from 'react';
import ButtonMenu from '../../components/ButtonMenu/ButtonMenu';
import { getAllCategories } from '../../lib';

export default function Menu() {
  const allCategories = getAllCategories();
  return (
    <>
      {allCategories.map((categ: string) => (
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
