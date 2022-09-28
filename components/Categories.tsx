import { Box } from '@chakra-ui/react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Category from './Category'
import { RiFilter3Line } from 'react-icons/ri'
import { categories } from '../utils/uitls'
import { useRef, useState } from 'react'

export default function Categories() {
  const scrollWidth = 1753;
  const scrollAmount =400
  const [x, setX] = useState<any>(0);
  let slider = useRef<HTMLDivElement>(null)

   const goLeft = () => {
    if (x - scrollAmount >= 0) {
      slider.current?.scrollTo(x - scrollAmount, 0);
    } else {
      slider.current?.scrollTo(0, 0);
    }
  }

  const goRight = () => {
    if (x + scrollAmount <= scrollWidth) {
      slider.current?.scrollTo(x + scrollAmount, 0);
    } else {
      slider.current?.scrollTo(scrollWidth, 0);
    }
  }

  const onSlide = () => {
    setX(slider.current?.scrollLeft)
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" margin="10px">

      <Box onClick={goLeft} border="1px solid grey" borderRadius="full" marginX="5px" marginY="0px" cursor="pointer" marginRight="10px" _hover={{boxShadow:"0px 0px 5px 1px #bbb"}}>
        <MdKeyboardArrowLeft size={26}/>
      </Box>

      <Box 
        ref={slider} 
        onScroll={onSlide} 
        sx={{'::-webkit-scrollbar':{display:"none"}}} 
        display="flex" 
        overflowX="scroll" 
        gap="5px" 
        marginRight="10px" 
        scrollBehavior="smooth"
      >
        {categories.map((category) => <Category category={category} key={category.id}/>)}
      </Box>

      <Box onClick={goRight} border="1px solid grey" borderRadius="full" marginX="5px" marginY="0px" cursor="pointer" marginRight="10px" _hover={{boxShadow:"0px 0px 5px 1px #bbb"}}>
        <MdKeyboardArrowRight size={26}/>
      </Box>

      <Box width="160px" display="flex" justifyContent="space-around" alignItems="center" marginY="5px" marginX="0px" border="1px solid grey" paddingX="12px" paddingY="10px" borderRadius="5px" cursor="pointer" fontSize="14px">
        <RiFilter3Line size={24}/>Filters
      </Box>
    </Box>
  )
}



