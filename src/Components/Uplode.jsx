 import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react"
 import {AiOutlineCloudUpload} from 'react-icons/ai'

const Uplode = () => {
  return (
    <Container  maxW={'container.xl'} p="16" h="100vh">
      <VStack color={'purple.500'} h={'100vh'} justifyContent={'center'}>
      <AiOutlineCloudUpload size={'10vmax'}/>

        <form>
      <HStack>
            <Input required type={"file" }
                   css={{
                "&::file-selector-button": {
                    border:"none",
                    width:"calc(100% + 36px)",
                    height:"100%",
                    marginLeft:"-18px",
                    color:"purple",
                    background:"white"
                }
            }}
            /><Button colorScheme={'purple'}
          
            
            >Upload</Button>
                
      </HStack>
        </form>
      </VStack>
    </Container>
  )
}

export default Uplode