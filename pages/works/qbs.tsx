import Layout from 'components/layouts/article'
import { Container, Badge } from '@chakra-ui/react'
import { XBreadcrumb } from 'components/xbreadcrumb'

const Page = () => (
  <Layout title="QBS System Limited">
    <Container>
      <XBreadcrumb parent="Works">
        QBS System Limited <Badge>2018 AUGUST - 2018 AUGUST</Badge>
      </XBreadcrumb>
    </Container>
  </Layout>
)

export default Page
