import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Heading } from './Heading'
// import docs from './heading.docs.mdx'

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Heading {...args} />

export const Heading1 = Template.bind({})
Heading1.args = {
  children: 'Heading 1',
  as: 'h1',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  children: 'Heading 2',
  as: 'h2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  children: 'Heading 3',
  as: 'h3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  children: 'Heading 4',
  as: 'h4',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  children: 'Heading 5',
  as: 'h5',
}

export const Heading6 = Template.bind({})
Heading6.args = {
  children: 'Heading 6',
  as: 'h6',
}

export const CustomHeading = Template.bind({})
CustomHeading.args = {
  children: 'Heading 1',
  as: 'h1',
}
