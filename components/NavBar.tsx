import { Box, Image, Text,Input, useMediaQuery } from '@chakra-ui/react'
import Head from 'next/head'
import { MdSearch } from 'react-icons/md'
import { RiFilter3Line } from 'react-icons/ri'
import { BsGlobe } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'

export default function NavBar() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  return (
    <div>
      <Head>
        <title>Holiday Homes & Apartment Rentals - Airbnb - Airbnb</title>
      </Head>

      {!isLargerThan1000?
        <Box position="relative" padding="10px">
          <Box position="absolute" top="50%" left="35px" transform="translate(-50%,-50%)">
            <MdSearch size={20}/>
          </Box>

          <Input 
            type="text"
            placeholder='Where to?'

            variant="unstyled"
            display="block"
            outline="none"
            border="none"
            width="100%"
            borderRadius="full"
            padding={4}
            paddingLeft="40px"
            boxShadow="0px 0px 10px #aaa"
          />

          <Box position="absolute" top="50%" right="20px" transform="translate(-50%,-50%)">
            <RiFilter3Line size={20}/>
          </Box>
        </Box>
        :
        <Box borderBottom="1px solid #eee">
        <Box width="90%" margin="auto" display="flex" justifyContent="space-between" alignItems="center" paddingX="0px" paddingY="15px">
          <Box display="flex" alignItems="center" flex={1}>
            <Image src='/assets/images/logo.png' alt='Logo' w="35px"/>
            <Text fontSize="1.5em" fontWeight="bold" color="#FF385C">airbnb</Text>
          </Box>
          
          <Box flex={1}>
            <Box width="max-content" margin="auto" display="flex" justifyContent="center" alignItems="center" padding="10px" borderRadius="full" fontSize="14px" border="1px solid #eee" boxShadow="0px 0px 5px #eee">
              <Box paddingX="10px" paddingY="0px" fontWeight="bold" cursor="pointer" borderRight="1px solid #000">
                Anywhere
              </Box>
              <Box paddingX="10px" paddingY="0px" fontWeight="bold" cursor="pointer" borderRight="1px solid #000">
                Anyweek
              </Box>
              <Box paddingLeft="10px" display="flex" justifyContent="space-between" alignItems="center" cursor="pointer">
                <Text marginRight="10px">Add Guests</Text>
                <Box backgroundColor="#FF385C" padding="5px" borderRadius="full"><MdSearch size={20} color="#fff"/></Box>
              </Box>
            </Box>
          </Box>

          <Box flex={1}>
            <Box width="260px" marginLeft="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Text paddingX="14px" paddingY="10px" transition="all 100ms ease-in" borderRadius="full" fontSize="14px" fontWeight="bold" cursor="pointer" _hover={{ backgroundColor:"#faf9f9" }}>Become a host</Text>
              <Box padding="10px" borderRadius="full" cursor="pointer" _hover={{backgroundColor: "#faf9f9"}}><BsGlobe/></Box>

              <Box display="flex" justifyContent="center" alignItems="center" borderRadius="full" paddingX="12px" paddingY="8px" cursor="pointer" border="1px solid #ddd" _hover={{ boxShadow:"0px 0px 5px #ddd"}}>
                <Box marginRight="10px">
                  <FiMenu size={20}/>
                </Box>
                <FaUserCircle size={24}/>
              </Box>

            </Box>
          </Box>


        </Box>
        </Box>
      }
    </div>
  )
}
