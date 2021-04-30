import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box } from './Box'
// import docs from './box.docs.mdx'

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Box {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'A basic box',
}

export const WithCss = Template.bind({})
WithCss.args = {
  children: 'A Box with custom CSS styles',
  css: {
    bg: '$indigo300',
    p: '$2',
    borderRadius: '$2',
    minHeight: '200px',
  },
}
