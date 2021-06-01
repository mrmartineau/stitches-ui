import React, { Fragment } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Grid } from './Grid'
import { Box } from '../Box'
// import docs from './grid.docs.mdx'

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    // docs: { page: docs },
    // paddings: [],
    /* backgrounds: {
      default: 'white',
    },*/
  },
} as Meta

const Template: Story = (args) => <Grid {...args} />

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    // alignItems: 'center',
    gap: '$2',
  },
}
