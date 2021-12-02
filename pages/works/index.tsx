import Layout from 'components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from 'components/section'
import { WorkGridItem } from 'components/grid-item'
import AcsThumbnail from 'public/images/works/acs_eyecatch.jpeg'
import QbsThumbnail from 'public/images/works/qbs_eyecatch.png'

const Page = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="acs"
            title="Frontend Developer"
            company="Alliance Computer Systems Ltd."
            thumbnail={AcsThumbnail}>
            Be responsible for developing web, mobile and apps to improve user
            experience.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="qbs"
            title="Analytics Intern"
            company="QBS Systems Ltd."
            thumbnail={QbsThumbnail}>
            Build five utility tools for Deep Learing related research.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Page
