import { Box, Image, Text } from '@chakra-ui/react'
import { CategoryType } from '../utils/uitls'

export default function Category({ category }:{category:CategoryType}) {
  return (
    <Box 
      padding="10px" 
      cursor="pointer" 
      opacity="0.5" 
      _hover={{opacity:"1"}} 
      transition="all 100ms ease-in"
      sx={{':first-child':{opacity:"1", borderBottom:"2px solid #000"}}}
    >

      <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={category.imgsrc} alt={category.title} width="25px" height="25px" display="flex" justifyContent="center" alignItems="center"/>
      </Box>

      <Text fontSize="14px" whiteSpace="nowrap" textAlign="center">{category.title}</Text>

    </Box>
  )
}