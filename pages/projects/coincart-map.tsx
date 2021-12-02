import Layout from 'components/layouts/article'
import { Container, Badge, List, ListItem, Link, Box } from '@chakra-ui/react'
import P from 'components/paragraph'
import { XBreadcrumb, Meta, XImage } from 'components/xbreadcrumb'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Page = () => (
  <Layout title="CoinCart Map">
    <Container>
      <XBreadcrumb parent="Projects">
        Coincart Map <Badge>2021</Badge>
      </XBreadcrumb>
      <P>
        An web app that show the location and schedule of the mobile coincart on
        a map.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <NextLink href="https://www.coincart-map-hk.app">
            <Link href="https://www.coincart-map-hk.app/" target="_blank">
              https://www.coincart-map-hk.app <ExternalLinkIcon mx="2px" />
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Typescript, Nextjs, Leaflet</span>
        </ListItem>
      </List>
      <Box px={3} py={2}>
        {[
          'HKMAGOVHK',
          'CoinCart',
          'CoinCollection',
          'TooManyCoins',
          'CoincartSchedule',
          'MAP',
        ].map((tag, tIdx) => (
          <Badge
            key={tIdx}
            size={'sm'}
            variant="solid"
            colorScheme="teal"
            m="1">
            {`# ${tag}`}
          </Badge>
        ))}
      </Box>
      <XImage src="/images/projects/coincart-map_01.png" alt="Coincart-map" />
      <XImage src="/images/projects/coincart-map_02.png" alt="Coincart-map" />
    </Container>
  </Layout>
)

export default Page
