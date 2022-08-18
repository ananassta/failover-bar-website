import React from 'react';
import { Link } from 'react-router-dom';
import { getStyles } from './styles';
import styles from './ButtonBeerName.module.css';

function ButtonBeerName({ buttonProps }) {
  const mediaQueryTablet = window.matchMedia('(min-width: 765px) and (max-width: 1023px)');
  const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)');
  const styleLink = getStyles(mediaQueryTablet, mediaQueryDesktop, buttonProps.value);
  return (
    <Link
      to={buttonProps.linkName}
      state={{ beerId: buttonProps.data }}
      style={styleLink}
      className={styles.link}
    >
      {buttonProps.name}
    </Link>
  );
}

export default ButtonBeerName;
