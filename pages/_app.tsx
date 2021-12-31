import 'styles/globals.css'
import 'styles/main.scss'
import NextNprogress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Layout from 'components/layouts/main'
import { isBrowser } from 'utils/xCm'
import { AnimatePresence } from 'framer-motion'
import theme from 'lib/theme'
import Fonts from 'components/fonts'
import 'react-medium-image-zoom/dist/styles.css'

function App({ Component, pageProps, router }: AppProps) {
  const [docLoader, setDocLoader] = useState<HTMLElement | null>(null)

  const removeLoader = () => {
    setDocLoader(null)
  }

  useEffect(() => {
    if (isBrowser()) {
      setDocLoader(document.getElementById('document_loader'))
    }
  }, [])

  useEffect(() => {
    if (!docLoader) return () => undefined
    docLoader.classList.add('out')
    docLoader.addEventListener('transitionend', removeLoader)
    docLoader.addEventListener('webkittransitionend', removeLoader)

    return () => {
      docLoader.removeEventListener('transitionend', removeLoader)
      docLoader.removeEventListener('webkittransitionend', removeLoader)
    }
  }, [docLoader])

  return (
    <>
      <Head>{/* <meta name="theme-color" content="#317EFB" /> */}</Head>
      <NextNprogress
        color="rgba(250,225,180,0.9)"
        startPosition={0.3}
        stopDelayMs={300}
        height={3}
        options={{ showSpinner: false, easing: 'ease', speed: 500 }}
        showOnShallow
      />

      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  )
}
export default App
