import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Link } from './Link'
// import docs from './link.docs.mdx'

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Link {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'A basic link',
  href: 'https://zander.wtf',
  tabIndex: 0,
}

export const Subtle = Template.bind({})
Subtle.args = {
  ...Basic.args,
  children: 'A subtle link',
  variant: 'subtle',
}

export const Blue = Template.bind({})
Blue.args = {
  ...Basic.args,
  children: 'A blue link',
  variant: 'blue',
}
