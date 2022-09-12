export function getStyles(mediaQueryTablet: boolean) {
  return {
    backgroundColor: 'none',
    borderRadius: '6.25em',
    marginTop: mediaQueryTablet ? '2.55em' : '1em',
    marginBottom: '0.9em',
    paddingBottom: '0em',
    // margin: '18px 16px',
    // width: '295px',
    // height: '50px',
    gap: mediaQueryTablet ? '0.4em' : '0.313em',
    // boxShadow: '4px 8px 24px rgba(16, 16, 16, 0.25)',
    color: '#EDEDED',
    fontWeight: '700',
    fontSize: mediaQueryTablet ? '1.5em' : '1em',
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
}
