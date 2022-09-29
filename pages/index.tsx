import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'

import NavBar from '../components/NavBar'
import Categories from '../components/Categories'
import Hotels from '../components/Hotels'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <Box minHeight="100vh">

      <Box position="sticky" top="0px" backgroundColor="#fff" boxShadow="0px 0px 5px #aaa">
        <NavBar/>
        <Categories/>
      </Box>

      <Hotels/>
      <Footer/>

    </Box>
  )
}

export default Home
