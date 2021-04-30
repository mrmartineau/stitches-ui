import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Text } from './Text'
// import docs from './text.docs.mdx'

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Text {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Lorem ipsum dolor sit amet',
}
