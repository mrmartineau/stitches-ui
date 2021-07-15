import { styled } from '../../theme/stitches.config'
import { sharedInputStyles } from '../Input/Input'

export const Textarea = styled('textarea', {
  display: 'block',
  width: '100%',
  p: '$2',
  appearance: 'none',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid $colors$coolGray400',
  borderRadius: '$default',
  color: 'inherit',
  bg: 'transparent',

  ...sharedInputStyles,
})
