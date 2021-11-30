// import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import {
  // Link,
  Container,
  Heading,
  Box,
  Image,
  // SimpleGrid,
  Button,
  // List,
  // ListItem,
  // Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from 'components/section'
import Paragraph from 'components/paragraph'

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
        {`Hello, I'm a Web Developer and mainly foucus on front-end based in Hong Kong!`}
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Leo Kan
          </Heading>
          <p>Digital Craftsman (Developer / Dancer / Designer )</p>
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
    </Container>
  )
}

export default HomePage
