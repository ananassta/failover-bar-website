import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './style.css';

function ButtonMenu(props) {
  const buttonProps = props;
  const styleButton = {
    backgroundColor: '#D75C36',
    borderRadius: '6.25em',
    width: '18.5em',
    height: '3.125em',
    margin: '1.125em 1em',
    gap: '0.625em',
    // margin: '18px 16px',
    // width: '295px',
    // height: '50px',
    // gap: '10px',
    boxShadow: '0.25em 0.5em 1.5em rgba(16, 16, 16, 0.25)',
    color: '#EDEDED',
    fontFamily: 'Raleway',
    fontSize: '1em',
    letterSpacing: '0.013em',
    textTransform: 'none',
    border: '0',
    '&:hover': {
      borderColor: '#D75C36',
    },
    '&:focus': {
      borderColor: '#D75C36',
    },
    '&:active': {
      borderColor: '#D75C36',
    },
  };
  const styleText = {
    textDecoration: 'none',
  };
  return (
    <Link to={buttonProps.linkName} state={{ data: buttonProps.data }} style={styleText}>
      <Button variant="outlined" sx={styleButton}>
        {buttonProps.name}
      </Button>
    </Link>
    // add onclick for choosed type of beer
  );
}

export default ButtonMenu;
