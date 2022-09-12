import * as CSS from 'csstype';

export function getStyles(inStock: boolean): CSS.Properties {
  return {
    pointerEvents: inStock ? 'auto' : 'none',
    opacity: inStock ? '1' : '0.5',
    textDecoration: 'none',
  };
}
