import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './style.css';

function ButtonMenu(props) {
  const buttonProps = props;
  const styleButton = {
    backgroundColor: '#D75C36',
    borderRadius: '100px',
    margin: '18px 16px',
    width: '295px',
    height: '50px',
    gap: '10px',
    boxShadow: '4px 8px 24px rgba(16, 16, 16, 0.25)',
    color: '#EDEDED',
    fontFamily: 'Raleway',
    fontSize: '16px',
    letterSpacing: '0.2px',
    textTransform: 'none',
    border: '0',
  };
  const styleText = {
    textDecoration: 'none',
  };
  return (
    <Link to={buttonProps.linkName} state={{ data: buttonProps.data }} style={styleText}>
      <Button variant="outlined" size="medium" sx={styleButton}>
        {buttonProps.name}
      </Button>
    </Link>
    // add onclick for choosed type of beer
  );
}

export default ButtonMenu;
