import React from 'react'
import Hero from './Pages/Hero'
import Article from './Pages/Article'
import CTH from './Pages/CTH'
import Navbar from './Component/Navbar'
import Menu from './Pages/Menu'

function App() {
  return (
    <div>
    <Navbar/>
    <br/>
    <br/>
      <Hero/>
    <Article/>
    <CTH/>
    <Menu/>
    </div>
  )
}

export default App