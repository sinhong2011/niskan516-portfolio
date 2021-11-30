import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Router } from 'next/router'

type MainProps = { children: React.ReactNode; router: Router }

const Main = ({ children, router }: MainProps) => (
  <Box as="main" pb={8}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0," />
      <meta name="description" content="niskAn516's portfolio" />
      <meta name="author" content="niskAn516" />
      <meta name="author" content="leo kan" />
      <link rel="apple-touch-icon" href="computer-cat-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:site_name" content="niskAn516's portfolio" />
      <meta property="og:type" content="website" />
      <link rel="manifest" href="/manifest.json" />
      <title>{process.env.REACT_APP_TITLE}</title>
    </Head>
    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
  </Box>
)

export default Main
