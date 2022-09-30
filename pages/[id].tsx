import { Box, Text, Image, useMediaQuery } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import { useRouter } from 'next/router'
import { AiFillStar } from 'react-icons/ai'
import { FiShare, FiHeart } from 'react-icons/fi'
import HotelDetailsExtraInfo from "../components/HotelDetailsExtraInfo"

export default function HotelDetailsPage() {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const router = useRouter();
  const { id, title, rating, date, distance, price, imgsrc } = router.query


  return (
    <Box>
      <Box position="sticky" top="0px" backgroundColor="#fff">
        <NavBar/>
      </Box>

      <Box width="90%" margin="auto">
        <Text fontSize="28px" paddingY="10px">Private luxury 7BHK villa with swimming pool</Text>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text display="flex" justifyContent="space-between" alignItems="center" marginRight="10px" fontSize="14px" fontWeight="bold"><AiFillStar/>{rating}</Text>
            <Text marginRight="10px" cursor="pointer" textDecoration="underline" fontSize="14px" fontWeight="bold">29 reviews</Text>
            <Text marginRight="10px" cursor="pointer" textDecoration="underline" fontSize="14px" fontWeight="bold">Marna,Goa,India</Text>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text marginLeft="10px" display="flex" justifyContent="space-between" alignItems="center" fontSize="14px" fontWeight="bold" cursor="pointer" textDecoration="underline"><FiShare/> Share</Text>
            <Text marginLeft="10px" display="flex" justifyContent="space-between" alignItems="center" fontSize="14px" fontWeight="bold" cursor="pointer" textDecoration="underline"><FiHeart/>Save</Text>
          </Box>
        </Box>

        <Box paddingY="20px">
          <Image src={`${imgsrc}`} alt={`${title}`} margin="auto" borderRadius="20px" width={isLargerThan1000?"80%":"100%"} height="600px" objectFit="cover"/>
        </Box>

        <HotelDetailsExtraInfo/>


      </Box>

    </Box>
  )
}
