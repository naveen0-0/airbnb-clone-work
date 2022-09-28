import { HotelType, hotels } from '../utils/uitls'
import Hotel from './Hotel'
import { Box } from '@chakra-ui/react'

export default function Hotels() {
  return (
    <Box 
      display="grid" 
      gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr))"
      gap="20px"
      width="95%"
      marginY="20px"
      marginX="auto"
    >
      {hotels.map((hotel:HotelType) => <Hotel hotel={hotel} key={hotel.id}/>)}
    </Box>
  )
}


