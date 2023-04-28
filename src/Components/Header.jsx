import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import {Link} from "react-router-dom";
import { HStack, VStack } from '@chakra-ui/react';
import imag1 from '../assets/1.jpg'
import imag2 from '../assets/2.jpg'
import imag3 from '../assets/3.jpg'
import imag4 from '../assets/4.jpg'
import imag5 from '../assets/5.png'

const Header = () => {
  const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <div>
      <Button
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="purple"
        w={"10"}
        h={"10"}
        p={"0"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
<DrawerOverlay />

<DrawerContent>
<DrawerCloseButton />

<DrawerHeader>
  Video Hub
</DrawerHeader>

<DrawerBody>

  <VStack alignItems={"flex-start"}>
    <Button onClick={onClose} variant={"ghost"}>
      <Link to={'/'}>Home</Link>
    </Button>

    <Button onClick={onClose} variant={"ghost"}>
      <Link to={'/videos'}>Videos</Link>
    </Button>

   

    <Button onClick={onClose} variant={"ghost"}>
      <Link to={'/videos?category=free'}>Free Videos</Link>
    </Button>

    <Button onClick={onClose} variant={"ghost"}>
      <Link to={'/upload'}>Upload Videos</Link>
    </Button>
  </VStack>

  <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} 
  justifyContent={"space-evenly"}
  >
    <Button onClick={onClose} colorScheme="purple">
      <Link to={'/login'} >Log In</Link>
    </Button>

    <Button  onClick={onClose} colorScheme="purple" variant={'outline'}>
      <Link to={'/signup'} >Sign Up</Link>
    </Button>
  </HStack>

</DrawerBody>
</DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;