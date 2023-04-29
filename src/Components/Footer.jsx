import { Box, Button, HStack,Text, Heading, Input,  VStack } from "@chakra-ui/react"
import {AiOutlineSend} from 'react-icons/ai'
import '../style/footer.scss'

 

const Footer = () => {
  return (
    <div>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>

        <div className="footer" direction={[ 'column' ,'row']}>
            <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Suscribe to get updated
                </Heading>
                <HStack
                borderBottom={"2px solid white"}
                >
                
                <Input placeholder="Enter Email Hear...." border={'none'} borderRadius={'none'} outline={'none'}/>
                    <Button p={0} colorScheme="purple" variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend colorScheme="purple" size={20}/>
                    </Button>
                </HStack>
            </VStack>

            {/* <VStack w={'full'} 
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            > */}
<VStack w={'full'} 
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
<Heading textTransform={'uppercase'} textAlign={'center'}>
Video Hub

</Heading>
<Text>
    All Riht Receved &copy;
</Text>
            {/* </VStack> */}

            </VStack>

            <VStack w={'full'}>
<Heading size={'md'} textTransform={'uppercase'}>
Social Media</Heading>
<Button variant={'link'} colorScheme="whiteAlpha">
<a href="https://www.youtube.com/watch?v=Hi_gyY-mMQo" target="'_blank">
    Youtub
</a>

</Button>

<Button variant={'link'} colorScheme="whiteAlpha">
<a href={'https://github.com/karandave06'} target="'_blank">
    GitHub
</a>

</Button>

<Button variant={'link'} colorScheme="whiteAlpha">
<a href="https://www.linkedin.com/in/karan-dave-18702324b/" target="'_blank">
    Linkdin
</a>

</Button>


            </VStack>


        </div>
      </Box> 
    </div>
  )
}

export default Footer
