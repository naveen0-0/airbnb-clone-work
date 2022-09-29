import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'
import { FaRegHeart, FaUserCircle } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'
import { IoIosArrowUp } from 'react-icons/io'

export default function Footer() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  return (

    <Box 
      position="sticky" 
      bottom="0px" 
      zIndex="10"
      backgroundColor="#fff" 
      borderTop="1px solid #ddd"
    >
      {isLargerThan1000? 
        <Box
          fontSize="14px"
          padding="10px"
          margin="auto"
          width="95%"
          >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Box display="flex">
              <Box marginRight="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>&#169; 2022 Airbnb,Inc.</Box>
              <Box marginRight="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>Privacy</Box>
              <Box marginRight="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>Terms</Box>
              <Box marginRight="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>Sitemap</Box>
              <Box marginRight="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>Company details</Box>
              <Box marginRight="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>Destinations</Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box marginLeft="10px" cursor="pointer" _hover={{textDecoration:"underline"}}><BsGlobe size={16}/></Box>
              <Box marginLeft="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>English (IN)</Box>
              <Box marginLeft="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>&#8377; INR</Box>
              <Box marginLeft="10px" cursor="pointer" _hover={{textDecoration:"underline"}}>Support & resources</Box>
              <Box marginLeft="10px" cursor="pointer" _hover={{textDecoration:"underline"}}><IoIosArrowUp size={20}/></Box>
            </Box>
          </Box>
        </Box>
      :
        <Box display="flex" justifyContent="space-around" maxWidth="300px" margin="auto" alignItems="center" paddingY="10px">
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" cursor="pointer">
            <MdSearch size={30} color="#FF385C"/>
            <Text fontSize="12px">Explore</Text>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" cursor="pointer">
            <FaRegHeart size={24}/>
            <Text fontSize="12px">Wishlists</Text>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" cursor="pointer">
            <FaUserCircle size={24}/>
            <Text fontSize="12px">Log in</Text>
          </Box>
        </Box>
      }
    </Box>
  )
}
