import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
import './style.css';

function ButtonBeerName(props) {
  const buttonProps = props;
  const styleLink = {
    backgroundColor: 'none',
    borderRadius: '100px',
    // margin: '18px 16px',
    width: '217px',
    height: '40px',
    textAlign: 'left',
    // gap: '10px',
    // boxShadow: '4px 8px 24px rgba(16, 16, 16, 0.25)',
    color: '#D75C36',
    fontFamily: 'Raleway',
    fontSize: '14px',
    letterSpacing: '0.px',
    textTransform: 'none',
    border: '0',
    '&:hover': {
      // borderColor: 'none',
      color: 'aqua',
    },
    // '&:focus': {
    //   borderColor: 'none',
    // },
    // '&:active': {
    //   borderColor: 'none',
    // },
    textDecoration: 'none',
  };
  //   const styleText = {
  //     textDecoration: 'none',
  //   };
  const handleMouseEnter = (e) => {
    e.target.style.color = '#757575';
    e.target.style.transition = 'color 250ms';
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = '#D75C36';
  };
  return (
    <Link
      to={buttonProps.linkName}
      state={{ data: buttonProps.data }}
      style={styleLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <Button size="medium" sx={styleButton}> */}
      {buttonProps.name}
      {/* </Button> */}
    </Link>
  );
}

export default ButtonBeerName;
