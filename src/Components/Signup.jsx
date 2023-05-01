import { Button,Text, Container, Heading, Input, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

 

const Signup = () => {
  return (
    <Container  maxW={'container.xl'} h={'100vh'} p='16'>
    <form >

  <VStack alignItems={'strech'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
<Heading>
   VIDEO HUB
</Heading>

<Input placeholder="Name"
    type="name"
    required
    focusBorderColor="purple.500"
  autoComplete="off"
/>


<Input placeholder="Email"
    type="email"
    required
    focusBorderColor="purple.500"
  autoComplete="off"
/>

<Input placeholder="Password"
    type="password"
    required
  autoComplete="off"

    focusBorderColor="purple.500"
/>

<Button variant={'link'}
alignSelf={'flex-end'}>
    <Link to={'/forgotpassword'} >Forgot Password</Link>
</Button>

<Button colorScheme="purple" type="submit">
  Sign Up
</Button>

<Text textAlign={'right'} >


Already Have Accoutn ?

<Button variant={'link'} ml={'2'}  colorScheme="purple" type="submit">
   <Link to={'/login'}> Log In</Link>
</Button>

</Text>
  </VStack>
    </form>
    </Container>
  )
}

export default Signup
