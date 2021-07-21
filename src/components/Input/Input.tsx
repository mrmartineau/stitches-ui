import { focusVisibleOutset } from '../../theme/focus.styles'
import { styled } from '../../theme/stitches.config'

export const sharedInputStyles = {
  bg: '$background',
  border: '1px solid $colors$coolGray400',
  borderRadius: '$default',
  color: '$text',
  fontVariantNumeric: 'tabular-nums',
  ...focusVisibleOutset,
  '&:focus': {
    borderColor: '$primary',
  },
  '&:disabled,&:read-only': {
    backgroundColor: '$coolGray200',
    borderColor: '$coolGray400',
  },
  '&:disabled': {
    pointerEvents: 'none',
    color: '$coolGray500',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$coolGray600',
    },
  },
  '&:read-only': {
    '&:focus': {
      borderColor: '$primary',
    },
  },
}

export const Input = styled('input', {
  // Reset
  appearance: 'none',
  display: 'block',
  fontFamily: 'inherit',
  fontSize: '$body',
  margin: 0,
  outline: 'none',
  padding: 0,
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  ...sharedInputStyles,

  '&:-webkit-autofill': {
    // boxShadow:
    //   'inset 0 0 0 1px $colors$blue500, inset 0 0 0 100px $colors$blue200',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$sans',
    color: '$text',
  },

  '&::placeholder': {
    color: '$coolGray800',
  },

  variants: {
    size: {
      '1': {
        py: '$2',
        px: '$2',
        fontSize: '$body',
      },
      '2': {
        py: '$2',
        px: '$3',
        fontSize: '$5',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})
