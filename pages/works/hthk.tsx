import Layout from 'components/layouts/article'
import { Container, Badge, SimpleGrid } from '@chakra-ui/react'
import { XBreadcrumb, XImage } from 'components/xbreadcrumb'

const Page = () => (
  <Layout title="Hutchison Telecom Hong Kong Holdings">
    <Container>
      <XBreadcrumb parent="Works">
        Hutchison Telecom Hong Kong Holdings <Badge>2021 JUNE - present</Badge>
      </XBreadcrumb>
      <SimpleGrid columns={[2, 2, 3]} gap={6}>
        <XImage
          src="/images/works/hthk/frontend-architecture.png"
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
