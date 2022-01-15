import Layout from 'components/layouts/article'
import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { XBreadcrumb, Meta, XImage } from 'components/xbreadcrumb'

import Section from 'components/section'
import Paragraph from 'components/paragraph'

const companyDesc = [
  {
    meta: 'Company background',
    content:
      'A leading mobile operator in Hong Kong, committed to steering the dynamic development of high-speed mobile broadband service.',
  },
  {
    meta: 'Agile project management with Scrum',
    content: 'Jira',
  },
  {
    meta: 'Projects experience',
    content: 'rnr-form (so-sim, DIY-prepaid), trader-portal',
  },
  {
    meta: 'Source Control',
    content: 'Git, Gitlab',
  },
  {
    meta: 'Develop environment',
    content: 'MacOS (M1)',
  },
]

const projectsDesc = [
  {
    delay: 0.1,
    heading: 'rnr-form (so-sim, DIY-prepaid)',
    platformTitle: 'platform',
    platform: 'Web Browser',
    techstackTitle: 'Tech stack',
    techStack:
      'Html5, CSS3, Bootstrap5, JavaScript ES6, ReactJS, Typescript, Webpack5, Cordova, RESTful Api, OCR, gitlab ci/cd',
    desc: 'A common module for company different subbrand apps, that provider sim card Real-name Registration to user.',
  },
  {
    delay: 0.3,
    heading: 'trader-portal (CMS)',
    platformTitle: 'platform',
    platform: 'Web Browser',
    techstackTitle: 'Tech stack',
    techStack:
      'Html5, CSS3, Bootstrap5, JavaScript ES6, ReactJS, Typescript, Nextjs, Redux, RESTful Api, gitlab cicd, docker',
    desc: "A CMS for company's trader client that provider  msisdn enquiry and form application, etc...",
  },
]

const Page = () => (
  <Layout title="Hutchison Telecom Hong Kong Holdings">
    <Container>
      <XBreadcrumb parent="Works">
        Hutchison Telecom Hong Kong Holdings <Badge>2021 JUNE - present</Badge>
      </XBreadcrumb>
      <Paragraph>
        Build reusable component in React, translating designs and wireframes
        into high-quality code, guide frontend team to using typescrpit that
        make our code is more reliable and easier to refactor and this enables
        developers to evade errors and do rewrites much easier. Using gitlab
        ci/cd for better productity delivery experience.
      </Paragraph>
      <List ml={4} my={4}>
        {companyDesc.map((e, eIdx) => (
          <ListItem my={1} key={eIdx}>
            <Meta>{e.meta}</Meta>
            {e.content}
          </ListItem>
        ))}
      </List>
      <Heading>Projects</Heading>
      {projectsDesc.map((project, projectIdx) => (
        <Section delay={0.1} key={projectIdx}>
          <Heading as="h3" variant="section-title">
            {project.heading}
          </Heading>
          <div>
            <Paragraph style={{ margin: 5 }}>{project.desc}</Paragraph>
            <List>
              <ListItem my={1}>
                <Meta>{project.platformTitle}</Meta> {project.platform}
              </ListItem>
              <ListItem my={1}>
                <Meta>{project.techstackTitle}</Meta> {project.techStack}
              </ListItem>
            </List>
          </div>
        </Section>
      ))}
      <SimpleGrid columns={[2, 2, 3]} gap={6}>
        <XImage
          src="/images/works/hthk/frontend-architecture.png"
          alt="Frontend architecture"
          zoomMargin={60}
        />
        <XImage src="/images/works/hthk/rnr-form.png" alt="RNR Form" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Page
