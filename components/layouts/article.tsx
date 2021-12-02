import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from 'components/grid-item'
import React from 'react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
}

interface LayoutProps {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title }: LayoutProps) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative', paddingTop: 20 }}>
    <>
      {title && (
        <Head>
          <title>{title} - niskAn516</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
      )}
      {children}

      <GridItemStyle />
    </>
  </motion.article>
)

export default Layout
