import Layout from 'components/layouts/article'
import { Container, Badge } from '@chakra-ui/react'
import { XBreadcrumb } from 'components/xbreadcrumb'

const Page = () => (
  <Layout title="Alliance Computer Systems Ltd.">
    <Container>
      <XBreadcrumb parent="Works">
        Alliance Computer Systems Ltd. <Badge>2017 July - 2019 April</Badge>
      </XBreadcrumb>
    </Container>
  </Layout>
)

export default Page
