import { Box } from '@chakra-ui/react'

const Footer = () => (
  <Box textAlign="center" opacity={0.4} fontSize="sm">
    &copy; {new Date().getFullYear()} niskAn516. All Rights Reserved.
  </Box>
)

export default Footer
