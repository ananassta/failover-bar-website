export function getStyles(mediaQuery: boolean) {
  return {
    backgroundColor: '#D75C36',
    borderRadius: '6.25em',
    width: mediaQuery ? '21em' : '18.5em',
    height: '3.125em',
    margin: '1.125em 1em',
    gap: '0.625em',
    boxShadow: '0.25em 0.5em 1.5em rgba(16, 16, 16, 0.25)',
    color: '#EDEDED',
    fontFamily: 'Raleway',
    fontSize: mediaQuery ? '1.5em' : '1em',
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
}
