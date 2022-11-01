import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'


function App() {
  const [sign,setSign]=useState(false)
  
  const myfunction=()=>{
    setSign(true)
  }

  return (
    <Router>
      <Navbar sign={sign}/>
      <Routes>
        <Route exact path='/' element={<Home sign={sign}/>} />
        <Route 
          path='/sign-up' 
          element={<Signup myfunction={myfunction} sign={sign}/>} 
        />
        <Route path='/sign-in' element={<SignIn myfunction={myfunction} sign={sign}/>}/>
      </Routes>      
    </Router>
  )
}

export default App
