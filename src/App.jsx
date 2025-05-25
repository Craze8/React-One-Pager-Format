import React from 'react'
import About from './Pages/Abt'
import Article from './Pages/article'
import CTH from './Pages/cth'
import Navbar from './Component/Navbar'
import Menu from './Pages/menu'
import Footer from './Component/Footer'
import Hero from './Pages/Abt'
import Homepage from './Pages/Homepage'


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
      <CTH />
      <Footer />
    </div>
  )
}

export default App
