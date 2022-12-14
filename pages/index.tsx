import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Footer, Navbar } from '../components'
import { HomeScreen } from '../features/home'

const Home: NextPage = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <HomeScreen />
      <Footer />
    </Box>
  )
}

export default Home
