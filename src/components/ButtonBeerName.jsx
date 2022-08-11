import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
import './style.css';

function ButtonBeerName(props) {
  const buttonProps = props;
  const styleLink = {
    pointerEvents: buttonProps.value === false ? 'none' : '',
    opacity: buttonProps.value === false ? '0.5' : '1',
    backgroundColor: 'none',
    borderRadius: '6.25em',
    marginTop: '-1em',
    // margin: '18px 16px',
    width: '13.563em',
    // height: '2.5em',
    textAlign: 'left',
    // gap: '10px',
    // boxShadow: '4px 8px 24px rgba(16, 16, 16, 0.25)',
    color: '#D75C36',
    fontFamily: 'Urbanist',
    fontSize: '0.875em',
    letterSpacing: '0.013em',
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
