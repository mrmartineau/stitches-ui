import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Textarea } from './Textarea'
// import docs from './textarea.docs.mdx'

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Textarea {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'A basic textarea',
  rows: 8,
}
