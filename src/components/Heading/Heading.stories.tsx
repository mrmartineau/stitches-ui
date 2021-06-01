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
  variant: 'h1',
  as: 'h1',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  children: 'Heading 2',
  variant: 'h2',
  as: 'h2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  children: 'Heading 3',
  variant: 'h3',
  as: 'h3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  children: 'Heading 4',
  variant: 'h4',
  as: 'h4',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  children: 'Heading 5',
  variant: 'h5',
  as: 'h5',
}

export const Heading6 = Template.bind({})
Heading6.args = {
  children: 'Heading 6',
  variant: 'h6',
  as: 'h6',
}

export const sectionHeading = Template.bind({})
sectionHeading.args = {
  children: 'Section heading',
  variant: 'sectionHeading',
}

export const sectionSubHeading = Template.bind({})
sectionSubHeading.args = {
  children: 'Section sub-heading',
  variant: 'sectionSubHeading',
}
