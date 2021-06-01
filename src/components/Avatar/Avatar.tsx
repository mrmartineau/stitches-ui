import { styled } from '../../theme/stitches.config'

export const Avatar = styled('div', {
  display: 'inline-flex',
  borderRadius: '$full',
  bg: '$coolGray800',
  color: '$coolGray50',
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',

  variants: {
    variant: {
      small: {
        width: 35,
        height: 35,
        fontSize: '$2',
      },
      large: {
        width: 50,
        height: 50,
        fontSize: '$4',
      },
    },
  },

  defaultVariants: {
    variant: 'large',
  },
})
