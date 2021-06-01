import { styled } from '../../theme/stitches.config'

export const heading = {
  fontFamily: '$sans',
  lineHeight: '$heading',
  fontWeight: '$light',
  mb: '$4',
  mt: '$6',
  color: '$text',
}

export const Heading = styled('h2', {
  boxSizing: 'border-box',

  variants: {
    variant: {
      h1: {
        ...heading,
        fontSize: '$11',
        mt: '$9',
      },
      h2: {
        ...heading,
        fontSize: '$9',
        mt: '$9',
      },
      h3: {
        ...heading,
        fontSize: '$7',
      },
      h4: {
        ...heading,
        fontSize: '$5',
      },
      h5: {
        ...heading,
        fontSize: '$3',
      },
      h6: {
        ...heading,
        fontSize: '$3',
      },
      sectionHeading: {
        ...heading,
        fontSize: '$9',
        m: 0,
      },
      sectionSubHeading: {
        ...heading,
        fontSize: '$7',
        m: 0,
        textTransform: 'uppercase',
        color: '$coolGray600',
      },
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})
