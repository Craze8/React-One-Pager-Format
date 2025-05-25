import React from 'react'
import About from './Pages/Abt'
import Footer from './Component/Footer'
import Homepage from './Pages/Homepage'
import Navbar from './Component/navbar'
import Article from './Pages/article'
import { MdCallToAction } from 'react-icons/md'
import CalltoAction from './Pages/CalltoAction'
import Menu from './Pages/menu'


function App() {
  return (
    <div>
      <Navbar />
      {/* Consider handling spacing via CSS rather than <br /> */}
      <br />
      <br />
    <Homepage/> 
    <Article />
         <About />
      <Menu />
    <CalltoAction />
      <Footer />
    </div>
  )
}

export default App
