import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './style.css';

function ButtonBack({ name }) {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);
  const mediaQueryTablet = window.matchMedia('(min-width: 765px) and (max-width: 1023px)');
  const styleButton = {
    backgroundColor: 'none',
    borderRadius: '6.25em',
    marginTop: mediaQueryTablet.matches ? '2.55em' : '1em',
    marginBottom: '0.9em',
    paddingBottom: '0em',
    // margin: '18px 16px',
    // width: '295px',
    // height: '50px',
    gap: mediaQueryTablet.matches ? '0.4em' : '0.313em',
    // boxShadow: '4px 8px 24px rgba(16, 16, 16, 0.25)',
    color: '#EDEDED',
    fontFamily: 'Raleway',
    fontSize: mediaQueryTablet.matches ? '1.5em' : '1em',
    letterSpacing: '0.013em',
    textTransform: 'none',
    border: '0',
    focusVisible: 'none',
    '&:hover': {
    //   borderColor: '#D75C36',
      backgroundColor: 'none',
    },
    '&:focus': {
    //   borderColor: '#D75C36',
      backgroundColor: 'none',
    },
    '&:active': {
    //   borderColor: '#D75C36',
      backgroundColor: 'none',
    },
  };
  return (
    <Button startIcon={<ArrowBackIcon />} sx={styleButton} onClick={onBack}>
      {name || 'Назад'}
    </Button>
  );
}

export default ButtonBack;
