import { motion, HTMLMotionProps } from 'framer-motion'
import { chakra, HTMLChakraProps } from '@chakra-ui/react'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

interface SectionProps {
  children: React.ReactNode
  delay?: number
}

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div)

const Section = ({ children, delay = 0 }: SectionProps) => (
  <MotionBox
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}>
    {children}
  </MotionBox>
)

export default Section
