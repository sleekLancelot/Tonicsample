import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Navbar } from '../components/layout'
import { BlogScreen } from '../features/blog'

const Home: NextPage = () => {
  return (
    <Box>
      <Navbar />
      <BlogScreen />
    </Box>
  )
}

export default Home
