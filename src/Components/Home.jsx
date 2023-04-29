import { Box, Heading,Container } from "@chakra-ui/react"
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Stack,Image,Text } from "@chakra-ui/react"

import imag1 from '../assets/1.jpg'
import imag2 from '../assets/2.jpg'
import imag3 from '../assets/3.jpg'
import imag4 from '../assets/4.jpg'
import imag5 from '../assets/5.png'

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%)",
    texttransform:"uppercase",
    p:"4",
    size:"3xl"
}

 
const Home = () => {
  return (
    <>
    <Box>
<MyCarousel />

<Container maxW={'container.xl'}  minH="100vh" p="16">
<Heading textTransform={"uppercase"} py={"2"} w="fit-content" borderBottom="2px solid" m="auto">
  Services
</Heading>

<Stack  h="full"
p="4"
alignItems="center"
direction={["column","row"]}>

<Image src={imag5} h={['40', '400']} filter={"hue-rotate(-130deg)"}/>
 
 <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum vitae incidunt nesciunt. Accusantium ut, sit ad nemo illum corrupti laborum rem iure facere veniam ea sunt impedit doloribus? Repellat quaerat non quos reiciendis ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum vitae incidunt nesciunt. Accusantium ut, sit ad nemo illum corrupti laborum rem iure facere veniam ea sunt impedit doloribus? Repellat quaerat non quos reiciendis ut.
 </Text>

</Stack>
</Container>
    </Box>

  
    </>
  )
}
const MyCarousel = () =>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} 
    showArrows={false} showThumbs={false} 
    >
<Box w={'full'} h={'100vh'}>

<img src={imag1} alt="" />
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
Show The Future</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={imag2} alt="" />
<Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
Future Is Gaming</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={imag3} alt="" />
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
Gaming on console</Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={imag4} alt="" />
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
Night light is cool</Heading>
</Box>
    </Carousel>
)
export default Home
