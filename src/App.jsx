import {Routes,Route,BrowserRouter} from 'react-router-dom'
// import { Button,ColorModeScript,theme } from '@chakra-ui/react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Video from './Components/Video'
import Uplode from './Components/Uplode'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {


  return (
    <>
    <BrowserRouter>
 <Header />
 <Routes>
  <Route path={'/'} element={<Home />} />
   <Route path='/videos' element = { <Video />}  />
   <Route path='/upload' element={<Uplode />}/>
   <Route path='/login' element={<Login />}/>
   <Route path='/signup' element={<Signup />}/>

 </Routes>
 <Footer />
 </BrowserRouter>
    </>
  )
}

export default App
