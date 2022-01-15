import Layout from 'components/layouts/article'
import { Container, Badge, List, ListItem, Heading } from '@chakra-ui/react'
import { XBreadcrumb, Meta } from 'components/xbreadcrumb'

import Section from 'components/section'
import Paragraph from 'components/paragraph'

const companyDesc = [
  {
    meta: 'Company background',
    content:
      'Your choice of Internet of Things (IoT) solutions for enterprises and projects in Asia Pacific.',
  },
  {
    meta: 'project management',
    content: 'Trello',
  },
  {
    meta: 'Projects experience',
    content: 'Ht vision',
  },
  {
    meta: 'Source Control',
    content: 'Git, Gitlab',
  },
  {
    meta: 'Develop environment',
    content: 'macOS',
  },
]

const projectsDesc = [
  {
    delay: 0.1,
    heading: 'Ht Vision',
    platformTitle: 'platform',
    platform: 'Web Browser',
    techstackTitle: 'Tech stack',
    techStack: 'Html5, CSS3, jquery, JavaScript, Python ',
    desc: 'a Bbox tagging web application ',
  },
]

const Page = () => (
  <Layout title="QBS System Limited">
    <Container>
      <XBreadcrumb parent="Works">
        QBS System Limited <Badge>2018 AUGUST - 2018 AUGUST</Badge>
      </XBreadcrumb>
      <Paragraph>Built five utility tools for Deep Learning project</Paragraph>
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
