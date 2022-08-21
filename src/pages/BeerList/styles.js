export function getStyles(inStock) {
  return {
    pointerEvents: inStock ? '' : 'none',
    opacity: inStock ? '1' : '0.5',
    textDecoration: 'none',
  };
}
