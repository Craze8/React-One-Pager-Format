import React from 'react'
import About from './Pages/Abt'

import Menu from './Pages/menu'
import Footer from './Component/Footer'
import Hero from './Pages/Abt'
import Homepage from './Pages/Homepage'
import Navbar from './Component/navbar'
import CTH from './Pages/CTH'
import Article from './Pages/article.jsx'


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
