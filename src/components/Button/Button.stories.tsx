import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from './Button'
// import docs from './button.docs.mdx'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
  /* argTypes: {
    // Select element
    variant: {
      name: 'Variant',
      defaultValue: 'large',
      control: {
        type: 'select',
        options: ['large', 'small']
      },
    },
    // Radio
    variant: {
      name: 'Variant',
      defaultValue: 'large',
      control: {
        type: 'radio',
        options: ['large', 'small']
      },
    },
  }, */
} as Meta

const Template: Story = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Click me',
}

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  ...Primary.args,
  size: 2,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
}

export const SecondaryLarge = Template.bind({})
SecondaryLarge.args = {
  ...Secondary.args,
  size: 2,
}

export const Ghost = Template.bind({})
Ghost.args = {
  ...Primary.args,
  variant: 'ghost',
}

export const GhostLarge = Template.bind({})
GhostLarge.args = {
  ...Ghost.args,
  size: 2,
}

/* Standard.decorators = [
  (Story) => (
    <Box sx={{ color: 'bright' }}>
      <Story />
    </Box>
  ),
]*/
/* Standard.parameters = {
  backgrounds: {
    default: 'blue',
  },
}*/
