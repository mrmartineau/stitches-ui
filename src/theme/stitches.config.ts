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
      primary: '$blue500',
      secondary: '$red500',
      accent: '$emerald500',
      highlighted: 'blue',
      muted: '$coolGray300',

      focus: '$blue200',
    },
    fonts: {
      sans:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif," Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono:
        '"IBM Plex Mono", "JetBrains Mono", "Fira Code", "Input Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSizes: {
      body: '1rem',
      0: '0.625rem', // 10px
      1: '0.75rem', // 12px
      2: '0.875rem', // 14px
      3: '1rem', // 16px - body, h5, h4
      4: '1.125rem', // 18px
      5: '1.25rem', // 20px
      6: '1.375rem', // 22px
      7: '1.5625rem', // 25px - h3
      8: '1.75rem', // 28px
      9: '2rem', // 32px - h2
      10: '2.25rem', // 36px
      11: '2.625rem', // 42px - h1
      12: '2.875rem', // 46px
      13: '3.1875rem', // 51px
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
    lineHeights: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      body: '1.625',
      heading: 1.15,
    },
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    transitions: {},
    space: {
      0: '0rem', // 0px
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      5: '1.5rem', // 24px
      6: '2rem', // 32px
      7: '2.5rem', // 40px
      8: '3rem', // 48px
      9: '3.5rem', // 56px
      10: '4rem', // 64px
      11: '8rem', // 128px
      12: '16rem', // 256px
      13: '32rem', // 512px
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
      container: '1200px',
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      m: '0.4rem',
      lg: '0.625rem',
      xl: '1rem',
      full: '9999px',
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
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
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
    color: '$coolGray800',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
})
