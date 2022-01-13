import Layout from 'components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from 'components/section'
import { WorkGridItem } from 'components/grid-item'
import AcsLogo from 'public/images/works/acs_logo.png'
import QbsLogo from 'public/images/works/qbs_logo.png'
import HthkLogo from 'public/images/works/hthk_logo.png'

const Page = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 1 }} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="hthk"
            title="Frontend Developer"
            company="Hutchison Telecom Hong Kong Holdings"
            thumbnail={HthkLogo}>
            Focus on front-end development.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="acs"
            title="Frontend Developer"
            company="Alliance Computer Systems Ltd."
            thumbnail={AcsLogo}>
            Responsible for developing web, mobile and apps to improve user
            experience.
          </WorkGridItem>
        </Section>
        <Section delay={0.8}>
          <WorkGridItem
            id="qbs"
            title="Analytics Intern"
            company="QBS Systems Ltd."
            thumbnail={QbsLogo}>
            Build five utility tools for Machine Learing researcher.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Page
