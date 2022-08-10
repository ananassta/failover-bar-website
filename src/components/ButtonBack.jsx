import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './style.css';
// import { IconButton } from '@mui/material';

function ButtonBack(props) {
  const buttonProps = props;
  const styleButton = {
    backgroundColor: 'none',
    borderRadius: '6.25em',
    marginTop: '1em',
    marginBottom: '0.9em',
    paddingBottom: '0em',
    // margin: '18px 16px',
    // width: '295px',
    // height: '50px',
    gap: '0.313em',
    // boxShadow: '4px 8px 24px rgba(16, 16, 16, 0.25)',
    color: '#EDEDED',
    fontFamily: 'Raleway',
    fontSize: '1em',
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
  const styleText = {
    textDecoration: 'none',
    // width: '91px',
    // height: '40px',
  };
  return (
    <Link to={buttonProps.linkName} state={{ data: buttonProps.data }} style={styleText}>
      <Button startIcon={<ArrowBackIcon />} sx={styleButton}>
        {/* <Button variant="outlined" size="medium" sx={styleButton}> */}
        {/* <IconButton color="white" aria-label="back"> */}
        {/* <ArrowBackIcon /> */}
        {buttonProps.name}
        {/* </IconButton> */}
      </Button>
    </Link>
  );
}

export default ButtonBack;
