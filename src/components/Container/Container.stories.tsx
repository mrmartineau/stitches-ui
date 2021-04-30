import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Container } from './Container'
// import docs from './container.docs.mdx'

export default {
  title: 'Components/Container',
  component: Container,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Container {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'A basic container',
}
