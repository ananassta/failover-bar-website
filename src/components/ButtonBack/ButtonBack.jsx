import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getStyles } from './styles';

function ButtonBack({ name = 'Назад' }) {
  const navigate = useNavigate();
  const onBack = () => navigate(-1);
  const mediaQueryTablet = window.matchMedia('(min-width: 765px) and (max-width: 1023px)');
  const styleButton = getStyles(mediaQueryTablet);
  return (
    <Button startIcon={<ArrowBackIcon />} sx={styleButton} onClick={onBack}>
      {name}
    </Button>
  );
}

export default ButtonBack;
