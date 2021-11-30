import { Box, Container, Heading } from '@chakra-ui/layout'

function HomePage() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="red"
        p={3}
        mb={6}
        align="center">{`Welcome to NiskAn516's Portfolio!`}</Box>
      <Box
        display={{
          md: 'flex',
        }}></Box>
      <Box flexGrow={1}></Box>
      <Heading as={'h2'} variant="page-title">
        Leo Kan
      </Heading>
      <p>Web Developer (Frontend / Backend)</p>
    </Container>
  )
}

export default HomePage
