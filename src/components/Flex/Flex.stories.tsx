import React, { Fragment } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Flex } from './Flex'
import { Box } from '../Box'
import { Button } from '../Button'
// import docs from './flex.docs.mdx'

export default {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Flex {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <Fragment>
      <Box
        css={{
          bg: '$indigo300',
          p: '$2',
          borderRadius: '$default',
        }}
      >
        1
      </Box>
      <Box
        css={{
          bg: '$rose300',
          p: '$2',
          borderRadius: '$default',
        }}
      >
        2
      </Box>
      <Box
        css={{
          bg: '$cyan300',
          p: '$2',
          borderRadius: '$default',
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ipsa
        repudiandae ex voluptatum voluptas soluta, consequatur dicta quas porro
        qui itaque esse eum illum delectus. Illo tempore modi labore id!
      </Box>
    </Fragment>
  ),
}

export const WithCss = Template.bind({})
WithCss.args = {
  ...Basic.args,
  css: {
    alignItems: 'center',
    gap: '$2',
  },
}

export const AnotherExample = Template.bind({})
AnotherExample.args = {
  children: (
    <Fragment>
      <Button size="2">Click me please</Button>
      <Box>Some text</Box>
    </Fragment>
  ),
  css: {
    alignItems: 'center',
    gap: '$2',
  },
}
