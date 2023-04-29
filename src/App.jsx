import {Routes,Route,BrowserRouter} from 'react-router-dom'
// import { Button,ColorModeScript,theme } from '@chakra-ui/react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    <BrowserRouter>
 <Header />
 <Routes>
  <Route path={'/'} element={<Home />} />
 </Routes>
 <Footer />
 </BrowserRouter>
    </>
  )
}

export default App
