import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input } from './Input'
// import docs from './input.docs.mdx'

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Input {...args} />

export const Basic = Template.bind({})
Basic.args = {
  value: 'Default',
}

export const BasicSize2 = Template.bind({})
BasicSize2.args = {
  value: 'Size 2',
  size: '2',
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  placeholder: 'Some placeholder text',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  ...Basic.args,
  readOnly: true,
}

export const Email = Template.bind({})
Email.args = {
  value: 'someone@foo.com',
  type: 'email',
}
