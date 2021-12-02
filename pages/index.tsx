// import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from 'components/section'
import Paragraph from 'components/paragraph'
import { BioSection, BioYear } from 'components/bio'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'

function HomePage() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mt={2}
        mb={6}
        align="center">
        {`Hello, I'm a Hong Kong based Web Developer and mainly focus on front-end!`}
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Leo Kan
          </Heading>
          <p>Digital Craftsman (Developer / Dancer / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            maxH="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/niskan516.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Leo Kan is a front-end developer based in Hong Kong, his programmer
          life start from 2019 July.
          {/* <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink> */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My working history
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born on Earth.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Take course of{' '}
          <NextLink href="https://www.vtc.edu.hk/admission/en/programme/it114116-higher-diploma-in-data-science-and-analytics/">
            <Link
              href="https://www.vtc.edu.hk/admission/en/programme/it114116-higher-diploma-in-data-science-and-analytics/"
              target="_blank">
              Higher Diploma in Data Science and Analytics
            </Link>
          </NextLink>
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Analytics Intern for{' '}
          <NextLink href="/works/qbs/">
            <Link href="/works/qbs/">QBS System Ltd in Summer.</Link>
          </NextLink>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Higher Diploma and Worked at{' '}
          <NextLink href="/works/acs/">
            <Link href="/works/acs/">Alliance Computer Systems Ltd.</Link>
          </NextLink>
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Work at{' '}
          <NextLink href="/works/hthk/">
            <Link href="/works/hthk/">HTHK</Link>
          </NextLink>
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Cat, Breaking Dance, Gyming, ACG, Music, Running, Hiking, Reading
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/sinhong2011" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}>
                @sinhong2011
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/niskan516.dev/"
              target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}>
                @niskan516.dev
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default HomePage
