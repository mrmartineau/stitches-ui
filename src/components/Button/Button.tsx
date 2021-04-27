import { styled } from '../../theme/stitches.config'

export const Button = styled('button', {
  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  border: 'none',
  borderRadius: '$2',
  height: '$5',
  px: '$2',
  fontFamily: '$sans',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$slate100',
    boxShadow: 'inset 0 0 0 1px $colors$slate600',
    color: '$slate700',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '1': {
        height: '$5',
        px: '$2',
        fontSize: '$2',
        lineHeight: '25px',
      },
      '2': {
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '35px',
      },
    },
    variant: {
      // w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200
      primary: {
        backgroundColor: '$coolGray900',
        color: '$background',
        '&:hover': {
          backgroundColor: '$coolGray700',
        },
        '&:active': {
          backgroundColor: '$coolGray500',
        },
        '&:focus': {
          backgroundColor: '$coolGray500',
          boxShadow: 'inset 0 0 0 1px $colors$text, 0 0 0 1px $colors$text',
        },
      },
      secondary: {
        backgroundColor: '$background',
        color: '$text',
        boxShadow:
          'inset 0 0 0 1px $colors$coolGray300, 0 0 0 1px $colors$coolGray300',
        '&:hover': {
          boxShadow:
            'inset 0 0 0 1px $colors$coolGray500, 0 0 0 1px $colors$coolGray500',
        },
        '&:active': {
          boxShadow:
            'inset 0 0 0 1px $colors$coolGray500, 0 0 0 1px $colors$coolGray500',
        },
        '&:focus': {
          backgroundColor: '$coolGray100',
          boxShadow:
            'inset 0 0 0 1px $colors$coolGray500, 0 0 0 1px $colors$coolGray500',
        },
      },
      ghost: {
        mixBlendMode: 'multiply',
        backgroundColor: 'transparent',
        color: '$hiContrast',
        '&:hover': {
          backgroundColor: '$coolGray100',
        },
        '&:active': {
          boxShadow:
            'inset 0 0 0 1px $colors$coolGray300, 0 0 0 1px $colors$coolGray300',
        },
        '&:focus': {
          backgroundColor: '$coolGray100',
          boxShadow:
            'inset 0 0 0 1px $colors$coolGray300, 0 0 0 1px $colors$coolGray300',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$slate300',
        boxShadow: 'inset 0 0 0 1px $colors$slate700',
        color: '$slate900',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate400',
            boxShadow: 'inset 0 0 0 1px $colors$slate700',
          },
        },
        '&:active': {
          backgroundColor: '$slate400',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
        },
      },
      waiting: {
        backgroundColor: '$slate300',
        boxShadow: 'inset 0 0 0 1px $colors$slate700',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate400',
            boxShadow: 'inset 0 0 0 1px $colors$slate700',
          },
        },
        '&:active': {
          backgroundColor: '$slate400',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate700',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
    variant: 'primary',
  },

  // // mini reset
  // appearance: 'none',
  // border: 'none',
  // backgroundColor: 'transparent',
  // lineHeight: 1,
  // borderRadius: '99999px',
  // px: '$1',

  // display: 'inline-flex',

  // variants: {
  //   size: {
  //     1: {
  //       fontSize: '13px',
  //       height: '25px',
  //     },
  //     2: {
  //       fontSize: '15px',
  //       height: '35px',
  //     },
  //   },
  //   variant: {
  //     gray: {
  //       backgroundColor: '$gray400',
  //       '&:hover': {
  //         backgroundColor: '$gray500',
  //       },
  //     },
  //     primary: {
  //       backgroundColor: '$primary',
  //       color: 'white',
  //       '&:hover': {
  //         backgroundColor: '$primaryDark',
  //       },
  //     },
  //   },
  //   outlined: {
  //     true: {
  //       $$shadowColor: 'transparent',
  //       backgroundColor: 'transparent',
  //       boxShadow: '0 0 0 1px $$shadowColor',
  //     },
  //   },
  // },

  // defaultVariants: {
  //   variant: 'gray',
  //   size: '1',
  // },

  // compoundVariants: [
  //   {
  //     variant: 'gray',
  //     outlined: true,
  //     css: {
  //       $$shadowColor: '$colors$gray400',
  //     },
  //   },
  //   {
  //     variant: 'primary',
  //     outlined: true,
  //     css: {
  //       $$shadowColor: '$colors$primary',
  //       color: '$primary',
  //       '&:hover': {
  //         color: 'white',
  //       },
  //     },
  //   },
  // ],
})
