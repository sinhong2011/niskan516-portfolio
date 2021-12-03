import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react'
import { Global } from '@emotion/react'

interface GridItemProps {
  thumbnail: string | StaticImageData
  title?: string
  href?: string
  children?: React.ReactNode
  id?: string
  company?: string
}

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        loading="lazy"
        layout="fill"
      />
      <LinkOverlay href={href} target="_blank">
        <Heading mt={2} as="h3" variant="section-title">
          {title}
        </Heading>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Heading mt={2} as="h3" variant="section-title">
            {title}
          </Heading>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  company,
}: GridItemProps) => (
  <Box
    maxW="md"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    padding="5px">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Text
          height="65px"
          fontWeight="bold"
          fontSize="20"
          textDecoration="underline">
          {company}
        </Text>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          objectFit="contain"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Heading mt={2} as="h4" variant="section-title">
            {title}
          </Heading>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
