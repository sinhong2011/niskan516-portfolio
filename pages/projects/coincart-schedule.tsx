import Layout from 'components/layouts/article'
import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Box,
  SimpleGrid,
} from '@chakra-ui/react'
import P from 'components/paragraph'
import { XBreadcrumb, Meta, XImage } from 'components/xbreadcrumb'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const Page = () => (
  <Layout title="CoinCart Schedule">
    <Container>
      <XBreadcrumb parent="Projects">
        Coincart Schedule <Badge>2021</Badge>
      </XBreadcrumb>
      <P>
        An web app that show the location and schedule of the mobile coincart on
        a map.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <NextLink href="https://coin-cart-schedule.software">
            <Link href="https://coin-cart-schedule.software" target="_blank">
              coin-cart-schedule.software
              <ExternalLinkIcon mx="2px" />
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <Meta>github repository</Meta>
          <NextLink href="https://github.com/sinhong2011/coincart-react">
            <Link
              href="https://github.com/sinhong2011/coincart-react"
              target="_blank">
              coincart-react
              <ExternalLinkIcon mx="2px" />
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <Meta>SEO KEYWORDS</Meta>
          <NextLink href="https://tinyurl.com/2csyvts5">
            <Link href="https://tinyurl.com/2csyvts5" target="_blank">
              流動收銀車 時間表 <ExternalLinkIcon mx="2px" />
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Typescript, Nextjs, Redux, Leaflet</span>
        </ListItem>
      </List>
      <Box px={3} py={2}>
        {['香港金管局', '收銀車', '硬幣收集', '收銀車時間表', '地圖'].map(
          (tag, tIdx) => (
            <Badge
              key={tIdx}
              size={'md'}
              variant="solid"
              colorScheme="teal"
              m="1">
              {`#${tag}`}
            </Badge>
          )
        )}
      </Box>
      <SimpleGrid columns={[2, 2, 3]} gap={6}>
        <XImage
          src="/images/projects/coincart-schedule_01.png"
          alt="Coincart-map"
        />
        <XImage
          src="/images/projects/coincart-schedule_02.png"
          alt="Coincart-map"
        />
        <XImage
          src="/images/projects/coincart-schedule_03.png"
          alt="Coincart-map"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Page
