import { Box, Text, Image } from '@chakra-ui/react'
import { BsFillDoorOpenFill, BsFillCalendarDateFill } from 'react-icons/bs'
import { FaKey } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

export default function HotelDetailsExtraInfo() {
  return (
    <Box display="flex" justifyContent="space-between">

      <Box flex="4">
        <Box display="flex" justifyContent="space-between" alignItems="center" padding="20px" borderBottom="1px solid #aaa">
          <Box>
            <Text fontSize="28px">Entire villa hosted by Lavesh</Text>
            <Text fontSize="18px">16 guests7 bedrooms9 beds7.5 bathrooms</Text>
          </Box>
          <Box>
            <Image src="/assets/images/profile.webp" alt='Profile' width="70px" height="70px" borderRadius="full"/>
          </Box>
        </Box>

        
        <Box borderBottom="1px solid #aaa">
          <Box display="flex" alignItems="center" paddingY="20px">
            <Box><BsFillDoorOpenFill size={26}/></Box>
            <Box marginLeft="10px">
              <Text fontWeight="bold">Self check-in</Text>
              <Text fontSize="14px">You can check in with the doorperson.</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" paddingY="20px">
            <Box><FaKey size={26}/></Box>
            <Box marginLeft="10px">
              <Text fontWeight="bold">Great check-in experience</Text>
              <Text fontSize="14px">92% of recent guests gave the check-in process a 5-star rating.</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" paddingY="20px">
            <Box><BsFillCalendarDateFill size={26}/></Box>
            <Box marginLeft="10px">
              <Text fontWeight="bold">Free cancellation for 48 hours.</Text>
            </Box>
          </Box>
        </Box>

        <Box borderBottom="1px solid #aaa" paddingY="20px">
          <Box paddingY="10px" display="flex" fontSize="32px" fontWeight="bold"><Text color="#FF385C">air</Text><Text>cover</Text></Box>
          <Text paddingY="10px">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</Text>
          <Text paddingY="10px" textDecoration="underline" fontWeight="bold" cursor="pointer">Learn More</Text>
        </Box>

        <Box borderBottom="1px solid #aaa" paddingY="20px">
          <Text>
            A perfect blend of indoor and outdoor charm; this is a huge and spacious house with fine furnishings and decors. This 7 BHK villa is where you want to stay if you are looking to spend quality time with your friends or family. The villa comes with a private pool. Experience a Luxurious stay in this villa located at Marna Siolim. We have professional staff at the property to help you in case you are looking for additional service.
          </Text>
          <Text>....</Text>
          <Text textDecoration="underline" fontWeight="bold" cursor="pointer">Show More</Text>
        </Box>

        <Box borderBottom="1px solid #aaa" paddingY="20px">
          <Text fontWeight="bold" fontSize="24px" paddingBottom="10px">Where you will sleep</Text>

          <Box display="flex">
            <Box>
              <Image src='/assets/images/details1.webp' borderRadius="10px" />
              <Text paddingTop="10px" fontWeight="bold">Bedroom 1</Text>
              <Text>1 king bed</Text>
            </Box>
            <Box marginLeft="10px">
              <Image src='/assets/images/details2.webp' borderRadius="10px"/>
              <Text paddingTop="10px" fontWeight="bold">Bedroom 2</Text>
              <Text>1 king bed</Text>
            </Box>
          </Box>

        </Box>

        <Box borderBottom="1px solid #aaa" paddingY="20px">
          <Text fontWeight="bold" fontSize="24px" paddingBottom="10px">What this place offers</Text>

          <Box display="flex">
            <Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Kitchen</Text></Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Free parking on premises</Text></Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Hot tub</Text></Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">TV</Text></Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Carbon monoxide alarm</Text></Box>
            </Box>

            <Box marginLeft="30px">
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Wifi</Text></Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Pool</Text></Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Pets allowed</Text></Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Security cameras on property</Text></Box>
              <Box display="flex" alignItems="center" paddingY="5px"><FaKey/> <Text marginLeft="10px" fontSize="18px">Smoke alarm</Text></Box>
            </Box>
          </Box>
          <Box cursor="pointer" border="1px solid #000" width="max-content" paddingY="10px" paddingX="16px" marginY="20px" borderRadius="10px" fontSize="18px" _hover={{backgroundColor:"#eee"}}>Show all 47 amenities</Box>
        </Box>
      </Box>

      <Box flex="2">

        <Box padding="20px" margin="20px" border="1px solid #ccc" borderRadius="10px" boxShadow="0px 0px 10px #ccc">
          <Box display="flex" justifyContent="space-between">
            <Text fontSize="24px" fontWeight="bold">&#8377;38,000 night</Text>
            <Box display="flex" alignItems="center">
              <AiFillStar/>
              <Text>4.79</Text>
              <Text marginLeft="10px" textDecoration="underline">29 reviews</Text>
            </Box>
          </Box>

          <Box paddingY="10px">
            <Box display="flex">
              <Box flex={1} padding="10px" border="1px solid #000" borderTopLeftRadius="10px">
                <Text fontSize="10px" fontWeight="bold">CHECK-IN</Text>
                <Text fontSize="16px">10/16/2022</Text>
              </Box>
              <Box border="1px solid #000" flex={1} padding="10px" borderTopRightRadius="10px">
                <Text fontSize="10px" fontWeight="bold">CHECK-IN</Text>
                <Text fontSize="16px">10/16/2022</Text>
              </Box>
            </Box>
            <Box border="1px solid #000" display="flex" alignItems="center" padding="10px" borderBottomRadius="10px">
              <Box flex={1}>
                <Text fontSize="10px" fontWeight="bold">GUESTS</Text>
                <Text>1 guest</Text>
              </Box>
              <Box>
                <AiFillStar/>
              </Box>
            </Box>
          </Box>

          <Box marginY="10px" backgroundColor="#E0155A" textAlign="center" padding="10px" borderRadius="5px" color="#fff" fontWeight="bold">
            Reserve
          </Box>

          <Text textAlign="center" marginY="20px">You will not be charged yet</Text>

          <Box display="flex" justifyContent="space-between" marginY="10px">
            <Text textDecoration="underline">₹38,000 x 5 nights</Text>
            <Text>&#8377; 1,90,000</Text>
          </Box>

          <Box display="flex" justifyContent="space-between"  marginY="10px" paddingBottom="20px" borderBottom="2px solid #555">
            <Text textDecoration="underline">Service fee</Text>
            <Text>&#8377; 26,824</Text>
          </Box>

          <Box display="flex" justifyContent="space-between"  marginY="10px">
            <Text fontWeight="bold" fontSize="18px">Total before taxes</Text>
            <Text fontWeight="bold">&#8377; 2,16,824</Text>
          </Box>

          


        </Box>
      </Box>
    </Box>
  )
}
