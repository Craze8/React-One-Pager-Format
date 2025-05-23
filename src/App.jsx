import React from 'react'
import Hero from './Pages/hero'
import Article from './Pages/article'
import CTH from './Pages/cth'
import Navbar from './Component/Navbar'
import Menu from './Pages/menu'
import Footer from './Component/Footer'
import About from './Pages/about'

function App() {
  return (
    <div>
    <Navbar/>
    <br/>
    <br/>
      <Hero/>
    <Article/>
    <About/>
    <Menu/>
      <CTH/>
    <Footer/>
    </div>
  )
}

export default App