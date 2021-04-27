import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Container,
  Heading,
  Text,
  Paragraph,
} from './components'
import { globalStyles } from './theme/stitches.config'

function App() {
  const [count, setCount] = useState(0)
  globalStyles()
  return (
    <Container>
      <Grid>
        <header>
          <h1>Stitches UI</h1>
          <p>
            <Button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </Button>
          </p>
        </header>

        <Box>
          <h2 id="button">Links</h2>
          <Link
            href="https://zander.wtf"
            target="_blank"
            rel="noopener noreferrer"
          >
            zander.wtf
          </Link>
        </Box>

        <Box>
          <h2 id="button">Button</h2>
          <Flex css={{ mt: '$6', gap: '$6', aic: true }}>
            <Button>Primary</Button>
            <Button size="2">Primary large</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" size="2">
              Secondary large
            </Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost" size="2">
              Ghost large
            </Button>
          </Flex>
        </Box>

        <Box>
          <h2 id="button">Headings</h2>
          <Heading as="h1">h1</Heading>
          <Heading as="h2">h2</Heading>
          <Heading as="h3">h3</Heading>
          <Heading as="h4">h4</Heading>
          <Heading as="h5">h5</Heading>
          <Heading as="h6">h6</Heading>
        </Box>

        <Box>
          <h2 id="button">Text</h2>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            quae, repellendus doloremque exercitationem repudiandae rerum
            delectus ad possimus, fuga quam consequatur reiciendis eaque dolores
            rem quo, sit ipsum voluptatum aspernatur!
          </Text>
        </Box>

        <Box>
          <h2 id="button">Paragraph</h2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            quae, repellendus doloremque exercitationem repudiandae rerum
            delectus ad possimus, fuga quam consequatur reiciendis eaque dolores
            rem quo, sit ipsum voluptatum aspernatur!
          </Paragraph>
        </Box>
      </Grid>
    </Container>
  )
}

export default App
