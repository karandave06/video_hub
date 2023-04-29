import { Box, Heading,Container } from "@chakra-ui/react"
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

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
