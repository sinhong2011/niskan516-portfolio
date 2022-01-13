import Layout from 'components/layouts/article'
import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { XBreadcrumb, Meta } from 'components/xbreadcrumb'
import P from 'components/paragraph'

const Page = () => (
  <Layout title="Alliance Computer Systems Ltd.">
    <Container>
      <XBreadcrumb parent="Works">
        Alliance Computer Systems Ltd. <Badge>2017 July - 2019 April</Badge>
      </XBreadcrumb>
      <P></P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Company backgroud</Meta>
          An IT solutions provider and web developer in Hong Kong
        </ListItem>
        <ListItem>
          <Meta>Company backgroud</Meta>
          An IT solutions provider and web developer in Hong Kong
        </ListItem>
        <ListItem>
          <Meta>Company backgroud</Meta>
          An IT solutions provider and web developer in Hong Kong
        </ListItem>
        <ListItem>
          <Meta>Company backgroud</Meta>
          An IT solutions provider and web developer in Hong Kong
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Page
