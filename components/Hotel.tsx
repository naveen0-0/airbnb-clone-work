import { Box, Image, Text } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { HotelType } from '../utils/uitls'
import Link from 'next/link'

export default function Hotel({ hotel }:{ hotel:HotelType }) {
  return (
    <Link href={{
      pathname:`${hotel.id}`,
      query:hotel
    }}>
      <Box cursor="pointer">

        <Box display="flex" justifyContent="center" alignItems="center" height="250px">
          <Image src={hotel.imgsrc} alt={hotel.title} height="100%" width="100%" objectFit="cover" borderRadius="10px"/>
        </Box>

        <Box padding="5px">

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight="bold">{hotel.title}</Text>
            <Box display="flex" alignItems="center"><AiFillStar size={16}/>{hotel.rating}</Box>
          </Box>

          <Text>{hotel.distance} kilometers</Text>
          <Text>{hotel.date}</Text>
          <Box><Text fontWeight="bold" display="inline">&#8377;{hotel.price}</Text> night</Box>
        </Box>

      </Box>
    </Link>
  )
}
