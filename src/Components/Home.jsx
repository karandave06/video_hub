import { Box, Heading,Container,Button } from "@chakra-ui/react"
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Image,Text } from "@chakra-ui/react"

import imag1 from '../assets/1.jpg'
import imag2 from '../assets/2.jpg'
import imag3 from '../assets/3.jpg'
import imag4 from '../assets/4.jpg'
import imag5 from '../assets/5.png'
import '../style/home.scss'

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

<Container id="container" className="container" maxW={'container.xl'}  minH="100vh" p="16">
<Heading textTransform={"uppercase"} py={"2"} w="fit-content" borderBottom="2px solid" m="auto">
  Services
</Heading>

<div className="stackcontent"  
// h="full"
// p="4"
// alignItems="center"
// direction={["column","row"]}
>

<Image src={imag5} h={['40', '400']} filter={"hue-rotate(-130deg)"}/>
<div className="text-div">


 <Text letterSpacing={'widest'} className="text" lineHeight={'190%'} p={['4','16']}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum vitae incidunt nesciunt. Accusantium ut, sit ad nemo illum corrupti laborum rem iure facere veniam ea sunt impedit doloribus? Repellat quaerat non quos reiciendis ut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum vitae incidunt nesciunt. Accusantium ut, sit ad nemo illum corrupti laborum rem iure facere veniam ea sunt impedit doloribus? Repellat quaerat non quos reiciendis ut.
 </Text>
 </div>

</div>
</Container>
    </Box>

  
    </>
  )
}
const MyCarousel = () =>(
    <Carousel autoPlay  infiniteLoop interval={2000} showStatus={false} 
    showArrows={true} showThumbs={false}  className="carousel-box"
    >

   
<Box w={'full'} h={'100vh'}>

<img src={imag1} alt="" />
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
<p>Show The Future</p>
<Button>
  <a style={{color:"black"}} href="#container">Go Down</a>
</Button></Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={imag2} alt="" />
<Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
<p>Future Is Gaming</p>
<Button>
  <a href="#container">Go Down</a>
</Button></Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={imag3} alt="" />
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
<p>Gaming on console</p>
<Button>
  <a href="#container">Go Down</a>
</Button></Heading>
</Box>

<Box w={'full'} h={'100vh'}>
<img src={imag4} alt="" />
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
<p>Night light is cool</p>

<Button>
  <a href="#container">Go Down</a>
</Button></Heading>

<Button>
  <a href="#container">Go Down</a>
</Button>
</Box>

    </Carousel>
)
export default Home
