import { createCss } from '@stitches/react'
import type {
  AlignItemsProperty,
  BorderRadiusProperty,
  MarginTopProperty,
  MarginLeftProperty,
  PaddingTopProperty,
  WidthProperty,
  BackgroundProperty,
} from '@stitches/core/types/css-types'
import { tailwindColors } from './tailwindColors'
type TLength = (string & {}) | 0
type MarginProperty = MarginTopProperty<TLength>
type PaddingProperty = PaddingTopProperty<TLength>

export const { styled, theme, global } = createCss({
  theme: {
    colors: {
      ...tailwindColors,

      // Theme UI
      text: '$coolGray900',
      background: '$coolGray50',
      primary: 'blue',
      secondary: 'red',
      accent: 'blue',
      highlighted: 'blue',
      muted: 'silver',
    },
    fonts: {
      sans:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif," Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono:
        '"IBM Plex Mono", "JetBrains Mono", "Fira Code", "Input Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    fontWeights: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    radii: {
      1: '3px',
      2: '5px',
      3: '7px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  conditions: {
    bp1: '@media (min-width: 400px)',
  },
  utils: {
    m: () => (value: MarginProperty) => ({
      marginLeft: value,
      marginRight: value,
      marginTop: value,
      marginBottom: value,
    }),
    mx: () => (value: MarginProperty) => ({
      marginLeft: value,
      marginRight: value,
    }),
    ml: () => (value: MarginProperty) => ({
      marginLeft: value,
    }),
    mr: () => (value: MarginProperty) => ({
      marginRight: value,
    }),
    my: () => (value: MarginProperty) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: () => (value: MarginProperty) => ({
      marginTop: value,
    }),
    mb: () => (value: MarginProperty) => ({
      marginBottom: value,
    }),
    p: () => (value: PaddingProperty) => ({
      paddingLeft: value,
      paddingRight: value,
      paddingTop: value,
      paddingBottom: value,
    }),
    px: () => (value: PaddingProperty) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pl: () => (value: PaddingProperty) => ({
      paddingLeft: value,
    }),
    pr: () => (value: PaddingProperty) => ({
      paddingRight: value,
    }),
    py: () => (value: PaddingProperty) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: () => (value: PaddingProperty) => ({
      paddingTop: value,
    }),
    pb: () => (value: PaddingProperty) => ({
      paddingBottom: value,
    }),
    bg: () => (value: BackgroundProperty<TLength>) => ({
      background: value,
    }),

    // Non-Theme-UI utils
    size: () => (value: WidthProperty<TLength>) => ({
      width: value,
      height: value,
    }),
    spaceX: () => (value: MarginLeftProperty<TLength>) => ({
      '& > * + *': {
        marginLeft: value,
      },
    }),
    spaceY: () => (value: MarginTopProperty<TLength>) => ({
      '& > * + *': {
        marginTop: value,
      },
    }),
    ai: () => (value: AlignItemsProperty = 'center') => ({
      alignItems: value,
    }),
    aic: () => () => ({
      alignItems: 'center',
    }),
    br: () => (value: BorderRadiusProperty<TLength>) => ({
      borderRadius: value,
    }),
  },
})

export const globalStyles = global({
  body: {
    margin: 0,
    fontFamily: '$sans',
    bg: '$background',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
})
