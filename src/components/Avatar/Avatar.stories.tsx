import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Avatar } from './Avatar'
// import docs from './Avatar.docs.mdx'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Avatar {...args} />

export const small = Template.bind({})
small.args = {
  children: 'ZM',
  variant: 'small',
}

export const large = Template.bind({})
large.args = {
  children: 'ZM',
  variant: 'large',
}

export const withImage = Template.bind({})
withImage.args = {
  css: {
    backgroundImage:
      'url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg)',
  },
  variant: 'large',
}
