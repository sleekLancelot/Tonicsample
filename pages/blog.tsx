import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Footer, Navbar } from '../components'
import { BlogScreen } from '../features/blog'

const Blog: NextPage = () => {
  return (
    <Box>
      <Navbar />
      <BlogScreen />
      <Footer />
    </Box>
  )
}

export default Blog
