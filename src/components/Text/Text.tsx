import { styled } from '../../theme/stitches.config'

export const Text = styled('span', {
  boxSizing: 'border-box',

  variants: {
    variant: {
      caps: {
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
      },
    },
  },
  defaultVariants: {
    variant: 'caps',
  },
})
