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
  Input,
  Textarea,
} from './components'
import { globalStyles } from './theme/stitches.config'
import { Pre } from './helper-components/Pre'

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
          <Heading as="h2">Links</Heading>

          <Link
            href="https://zander.wtf"
            target="_blank"
            rel="noopener noreferrer"
          >
            zander.wtf
          </Link>

          <Pre>&lt;Link href="https://zander.wtf"&gt;Click me&lt;/Link&gt;</Pre>
        </Box>

        <Box>
          <Heading as="h2">Button</Heading>

          <Flex css={{ mt: '$6', gap: '$4', aic: true, flexWrap: 'wrap' }}>
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

          <Pre>&lt;Button&gt;Click me&lt;/Button&gt;</Pre>
          <Pre>&lt;Button size="2"&gt;Click me&lt;/Button&gt;</Pre>
          <Pre>&lt;Button variant="secondary"&gt;Click me&lt;/Button&gt;</Pre>
        </Box>

        <Box>
          <Heading as="h2">Headings</Heading>

          <Heading as="h1" variant="h1">
            h1
          </Heading>
          <Heading as="h2" variant="h2">
            h2
          </Heading>
          <Heading as="h3" variant="h3">
            h3
          </Heading>
          <Heading as="h4" variant="h4">
            h4
          </Heading>
          <Heading as="h5" variant="h5">
            h5
          </Heading>
          <Heading as="h6" variant="h6">
            h6
          </Heading>

          <Pre>
            &lt;Heading as="h1" variant="h1"&gt;Lorem ipsum&lt;/Heading&gt;
          </Pre>
        </Box>

        <Box>
          <Heading as="h2">Text</Heading>

          <Text>Lorem ipsum</Text>

          <Pre>&lt;Text&gt;Lorem ipsum&lt;/Text&gt;</Pre>
        </Box>

        <Box>
          <Heading as="h2">Paragraph</Heading>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            quae, repellendus doloremque exercitationem repudiandae rerum
            delectus ad possimus, fuga quam consequatur reiciendis eaque dolores
            rem quo, sit ipsum voluptatum aspernatur!
          </Paragraph>

          <Pre>
            &lt;Paragraph&gt;Lorem ipsum dolor sit amet consectetur adipisicing
            elit.&lt;/Paragraph&gt;
          </Pre>
        </Box>

        <Box>
          <Heading as="h2">Forms</Heading>
          <Heading as="h3">Input</Heading>

          <Input defaultValue="Default: size 1" css={{ mb: '$2' }} />
          <Input defaultValue="Default: size 2" css={{ mb: '$2' }} size="2" />
          <Input defaultValue="Email" type="email" css={{ mb: '$2' }} />
          <Input placeholder="Placeholder" css={{ mb: '$2' }} />
          <Input defaultValue="Disabled" disabled css={{ mb: '$2' }} />
          <Input defaultValue="Readonly" readOnly css={{ mb: '$2' }} />

          <Pre>&lt;Input defaultValue="Lorem ipsum dolor" /&gt;</Pre>

          <Heading as="h3">Textarea</Heading>
          <Textarea css={{ mb: '$2' }} rows={8}>
            Lorem ipsum dolor
          </Textarea>

          <Pre>&lt;Textarea rows={8}&gt;Lorem ipsum dolor&lt;/Textarea&gt;</Pre>
        </Box>
      </Grid>
    </Container>
  )
}

export default App
