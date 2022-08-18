import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { getStyles } from './styles';

function ButtonMenu({ buttonProps }) {
  const mediaQuery = window.matchMedia('(min-width: 765px) and (max-width: 1023px)');
  const styleButton = getStyles(mediaQuery);
  return (
    <Link to={buttonProps.linkName} state={{ data: buttonProps.data }} style={{ textDecoration: 'none' }}>
      <Button variant="outlined" sx={styleButton}>
        {buttonProps.name}
      </Button>
    </Link>
  );
}

export default ButtonMenu;
