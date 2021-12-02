import Layout from 'components/layouts/article'
import { Container, Badge } from '@chakra-ui/react'
import { XBreadcrumb } from 'components/xbreadcrumb'

const Page = () => (
  <Layout title="Hutchison Telecom Hong Kong Holdings">
    <Container>
      <XBreadcrumb parent="Works">
        Hutchison Telecom Hong Kong Holdings <Badge>2021 JUNE - </Badge>
      </XBreadcrumb>
    </Container>
  </Layout>
)

export default Page
