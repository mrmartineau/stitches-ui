import { styled } from '../../theme/stitches.config'

export const Input = styled('input', {
  // Reset
  appearance: 'none',
  display: 'block',
  border: 0,
  fontFamily: 'inherit',
  fontSize: '$body',
  margin: 0,
  outline: 'none',
  padding: 0,
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  // border: '1px solid $coolGray600',
  // borderRadius: '$2',
  // // height: '$5',
  // p: '$2',
  // fontFamily: '$sans',
  // fontSize: '$2',
  // fontWeight: 500,
  // fontVariantNumeric: 'tabular-nums',
  // color: '$coolGray700',

  // '&:disabled': {
  //   backgroundColor: '$coolGray100',
  //   boxShadow: 'inset 0 0 0 1px $colors$coolGray400',
  //   color: '$coolGray700',
  //   pointerEvents: 'none',
  //   cursor: 'not-allowed',
  // },
  // '&::placeholder': {
  //   color: 'inherit',
  //   opacity: 0.7,
  // },
  // '&[readonly]': {
  //   borderStyle: 'dotted',
  //   cursor: 'not-allowed',
  //   color: '$coolGray400',
  // },

  backgroundColor: '$background',
  boxShadow: 'inset 0 0 0 1px $colors$coolGray600',
  borderRadius: '$2',
  color: '$text',
  fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow:
      'inset 0 0 0 1px $colors$blue500, inset 0 0 0 100px $colors$blue200',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$sans',
    color: '$text',
  },

  '&:focus': {
    boxShadow:
      'inset 0px 0px 0px 1px $colors$primary, 0px 0px 0px 1px $colors$primary',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$primary, 0px 0px 0px 1px $colors$primary, inset 0 0 0 100px $colors$blue200',
    },
  },
  '&::placeholder': {
    color: '$coolGray800',
  },
  '&:disabled,&:read-only': {
    backgroundColor: '$coolGray200',
    boxShadow: 'inset 0px 0px 0px 1px $colors$coolGray400',
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
      boxShadow: 'inset 0px 0px 0px 2px $colors$primary',
    },
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
