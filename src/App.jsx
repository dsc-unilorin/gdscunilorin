import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/index.jsx'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route name="home" path="/" element={<Homepage />} />
      </Routes>
    </Router>
    </ChakraProvider>
  )
}

export default App
