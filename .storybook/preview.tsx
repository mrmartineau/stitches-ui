import React from 'react'
import { withPaddings } from 'storybook-addon-paddings'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { globalStyles } from '../src/theme/stitches.config'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  colorMode: {
    defaultMode: 'default',
    modes: {
      light: {
        name: 'Light',
      },
    },
  },
  paddings: {
    values: [
      { name: 'Small', value: '16px' },
      { name: 'Medium', value: '32px' },
      { name: 'Large', value: '64px' },
    ],
    default: 'Medium',
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#fff' },
      { name: 'peach', value: 'hsla(36, 100%, 92%, 1)' },
      { name: 'pink', value: 'hsla(0, 69%, 91%, 1)' },
      { name: 'green', value: 'hsla(114, 70%, 93%, 1)' },
      { name: 'light blue', value: 'hsla(199, 100%, 93%, 1)' },
      { name: 'blue', value: 'hsl(240, 100%, 22%)' },
      { name: 'dark', value: 'hsl(109, 0%, 16%)' },
      { name: 'grey', value: '#f2f2f2' },
    ],
  },
  viewport: {
    viewports: {
      iphoneSe: {
        name: 'iPhone SE',
        styles: {
          height: '667px',
          width: '375px',
        },
        type: 'mobile',
      },
      iphone12Mini: {
        name: 'iPhone 12 Mini',
        styles: {
          height: '812px',
          width: '375px',
        },
        type: 'mobile',
      },
      ...INITIAL_VIEWPORTS,
    },
  },
}

export const decorators = [
  withPaddings,
  (Story) => {
    globalStyles()
    return <Story />
  },
]
