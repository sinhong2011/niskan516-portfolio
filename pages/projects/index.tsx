import Layout from 'components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from 'components/section'
import { ProjectGridItem } from 'components/grid-item'
import CoincartThumbnail from 'public/images/projects/coincart-map_eyecatch.png'

const Page = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="coincart-map"
            title="Coincart-Map"
            thumbnail={CoincartThumbnail}>
            An web app that show the location and schedule of the mobile coin
            cart on a map.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Page
