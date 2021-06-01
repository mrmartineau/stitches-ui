import { focusVisibleOutset } from '../../theme/focus.styles'
import { styled } from '../../theme/stitches.config'

export const Link = styled('a', {
  display: 'inline-flex',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate300',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',

  '&:hover': {
    textDecorationLine: 'underline',
  },

  ...focusVisibleOutset,

  variants: {
    variant: {
      blue: {
        color: '$blue900',
        textDecorationColor: '$blue300',

        '&:focus-visible': {
          outlineColor: '$blue700',
        },
      },
      subtle: {
        color: '$coolGray900',
        textDecorationColor: '$coolGray300',
        '&:focus-visible': {
          outlineColor: '$coolGray700',
        },
      },
      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$coolGray300',
        '&:hover': {
          textDecorationColor: '$coolGray600',
        },
        '&:focus-visible': {
          outlineColor: '$coolGray700',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
})
