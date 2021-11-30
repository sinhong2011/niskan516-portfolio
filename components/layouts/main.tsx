import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Router } from 'next/router'
import Navbar from 'components/navbar'
import Footer from 'components/footer'

type MainProps = { children: React.ReactNode; router: Router }

const Main = ({ children, router }: MainProps) => (
  <Box as="main" pb={8}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0," />
      <meta name="description" content="niskAn516's portfolio" />
      <meta name="author" content="niskAn516" />
      <meta name="author" content="leo kan" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png?v=1"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png?v=1"
      />
      <link rel="manifest" href="/icons/site.webmanifest?v=1" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg?v=1"
        color="#444444"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico?v=1" />
      <meta name="apple-mobile-web-app-title" content="niskan516" />
      <meta name="application-name" content="niskan516" />
      <meta name="msapplication-TileColor" content="#eeeeee" />
      <meta
        name="msapplication-config"
        content="/icons/browserconfig.xml?v=1"
      />
      <meta name="theme-color" content="#1A202C" />
      <meta property="og:site_name" content="niskAn516's portfolio" />
      <meta property="og:type" content="website" />
      <link rel="manifest" href="/manifest.json" />
      <title>{process.env.REACT_APP_TITLE}</title>
    </Head>
    <Navbar path={router.asPath} />
    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
    <Footer />
  </Box>
)

export default Main
