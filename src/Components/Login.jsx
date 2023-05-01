import { Button,Text, Container, Heading, Input, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

 

const Login = () => {
  return (
    <Container  maxW={'container.xl'} h={'100vh'} p='16'>
    <form >

  <VStack alignItems={'strech'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
<Heading>
    Welcome Back
</Heading>

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
    Login
</Button>

<Text textAlign={'right'}>


New User ?

<Button variant={'link'} ml={'4'} colorScheme="purple" type="submit">
   <Link to={'/signup'}>SignUp</Link>
</Button>

</Text>
  </VStack>
    </form>
    </Container>
  )
}

export default Login
