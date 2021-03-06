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
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique nulla repellendus repudiandae voluptas minus molestias impedit explicabo fugit, ipsum, amet harum nisi optio vero quidem obcaecati aperiam esse quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique nulla repellendus repudiandae voluptas minus molestias impedit explicabo fugit, ipsum, amet harum nisi optio vero quidem obcaecati aperiam esse quo.',
}
