
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {ColorModeScript,ChakraProvider,theme} from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <>

 
  <ColorModeScript />

  <ChakraProvider theme={theme}>
  <ColorModeSwitcher />
    <App />
  </ChakraProvider>
  </>
  // </BrowserRouter>,
)
