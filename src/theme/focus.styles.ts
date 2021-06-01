export const focus = {
  outline: 0,
  boxShadow: `inset 0px 0px 0px 3px $colors$focus`,
}

export const focusOutset = {
  outline: 0,
  boxShadow: `0px 0px 0px 3px $colors$focus`,
}

// export const focusDarkBg = {
//   outline: 0,
//   boxShadow: `inset 0px 0px 0px 3px ${theme.colors?.focusDark}`,
// }

// export const focusDarkBgOutset = {
//   outline: 0,
//   boxShadow: `0px 0px 0px 3px ${theme.colors?.focusDark}`,
// }

export const focusNone = {
  outline: 0,
}

export const focusVisibleOutset = {
  '&:focus': {
    ...focusOutset,
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  '&:focus-visible': {
    ...focusOutset,
  },
}

export const focusVisibleInset = {
  '&:focus': {
    ...focus,
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  '&:focus-visible': { ...focus },
}
