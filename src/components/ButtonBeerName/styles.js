export function getStyles(mediaQueryTablet, mediaQueryDesktop, valueFromProps) {
  const fontSizeDesktopOrMobile = mediaQueryDesktop.matches ? '1.1em' : '0.875em';
  return {
    pointerEvents: valueFromProps === false ? 'none' : '',
    opacity: valueFromProps === false ? '0.5' : '1',
    marginTop: mediaQueryTablet.matches ? '-0.25em' : '-1em',
    marginBottom: mediaQueryTablet.matches ? '0.5em' : '0em',
    width: mediaQueryTablet.matches ? '20em' : '13.563em',
    fontSize: mediaQueryTablet.matches ? '1.85em' : fontSizeDesktopOrMobile,
  };
}
