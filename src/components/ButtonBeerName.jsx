import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function ButtonBeerName({ buttonProps }) {
  const mediaQueryTablet = window.matchMedia('(min-width: 765px) and (max-width: 1023px)');
  const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)');
  const fontSizeDesktopOrMobile = mediaQueryDesktop.matches ? '1.1em' : '0.875em';
  const styleLink = {
    pointerEvents: buttonProps.value === false ? 'none' : '',
    opacity: buttonProps.value === false ? '0.5' : '1',
    backgroundColor: 'none',
    borderRadius: '6.25em',
    marginTop: mediaQueryTablet.matches ? '-0.25em' : '-1em',
    marginBottom: mediaQueryTablet.matches ? '0.5em' : '0em',
    // margin: '18px 16px',
    width: mediaQueryTablet.matches ? '20em' : '13.563em',
    // height: '2.5em',
    textAlign: 'left',
    // gap: '10px',
    // boxShadow: '4px 8px 24px rgba(16, 16, 16, 0.25)',
    color: '#D75C36',
    fontFamily: 'Urbanist',
    fontSize: mediaQueryTablet.matches ? '1.85em' : fontSizeDesktopOrMobile,
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
      state={{ beerId: buttonProps.data }}
      style={styleLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonProps.name}
    </Link>
  );
}

export default ButtonBeerName;
