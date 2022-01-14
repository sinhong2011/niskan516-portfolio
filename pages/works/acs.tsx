import Layout from 'components/layouts/article'
import { Container, Badge, List, ListItem, Heading } from '@chakra-ui/react'
import { XBreadcrumb, Meta } from 'components/xbreadcrumb'

import Section from 'components/section'
import Paragraph from 'components/paragraph'

const companyDesc = [
  {
    meta: 'Company background',
    content:
      'An IT solutions provider, B2B company, and web developer in Hong Kong.',
  },
  {
    meta: 'Agile project management with Scrum',
    content: 'Jira, OpenProject',
  },
  {
    meta: 'Projects experience',
    content: 'Credit-Control System, Pit-Control, Roli-Pad, Sunppl',
  },
  {
    meta: 'Source Control',
    content: 'Git, Gitlab',
  },
  {
    meta: 'Develop environment',
    content: 'Windows 10',
  },
]

const projectsDesc = [
  {
    delay: 0.1,
    heading: 'Credit-Control',
    platformTitle: 'platform',
    platform: 'Web Browser',
    techstackTitle: 'Tech stack',
    techStack:
      'Html5, CSS3, Bootstrap4, JavaScript ES6, ReactJS, Typescript, Webpack4, Redux, RESTful Api',
    desc: 'A System for company to trace the client credit status and seek who need to repay, including dashboard, multi data table and various application forms.',
  },
  {
    delay: 0.3,
    heading: ' Pit-Control',
    platformTitle: 'platform',
    platform: 'Web Browser, iPad App',
    techstackTitle: 'Tech stack',
    techStack:
      'Html5, CSS3, Bootstrap4, JavaScript ES6, ReactJS, ReactNative, Typescript, Webpack4, Redux, RESTful Api',
    desc: 'A manage system for casino pit game.',
  },
  {
    delay: 0.6,
    heading: 'Roli-Pad',
    platformTitle: 'platform',
    platform: 'iPad App',
    techstackTitle: 'Tech stack',
    techStack:
      'Html5, CSS3, Bootstrap4, JavaScript ES6, ReactJS, ReactNative, Typescript, Webpack4, Redux, RESTful Api',
    desc: 'An application that for user registration, integrate OCR function.',
  },
  {
    delay: 1,
    heading: 'Sunppl',
    platformTitle: 'platform',
    platform: 'Web Browser',
    techstackTitle: 'Tech stack',
    techStack:
      'Html5, CSS3, Bootstrap4, JavaScript ES6, ReactJS, Typescript, Webpack4, Redux, RESTful Api, RocketChat, WebSocket',
    desc: "A IM Application for client's company internal communication.",
  },
]

const Page = () => (
  <Layout title="Alliance Computer Systems Ltd.">
    <Container>
      <XBreadcrumb parent="Works">
        Alliance Computer Systems Ltd. <Badge>2017 July - 2019 April</Badge>
      </XBreadcrumb>
      <Paragraph>
        Build high quality and reuseable code in React, develop features to meet
        customer requirements and business goals.
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
    </Container>
  </Layout>
)

export default Page
