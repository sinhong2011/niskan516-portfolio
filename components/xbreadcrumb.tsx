import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface XBreadcrumbProps {
  children: React.ReactNode
  parent: 'Works' | 'Projects'
}
export const XBreadcrumb = ({ children, parent }: XBreadcrumbProps) => (
  <Box>
    <NextLink href={`/${parent.toLowerCase()}`}>
      <Link>{parent}</Link>
    </NextLink>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const XImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }: { children: React.ReactNode }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)