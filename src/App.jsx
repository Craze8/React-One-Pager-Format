import React from 'react'
import About from './Pages/Abt'
import Footer from './Component/Footer'
import Homepage from './Pages/Homepage'
import Navigation from './Component/Navigation'
import Article from './Pages/article'
import CalltoAction from './Pages/CalltoAction'
import Food from './Pages/Food'


function App() {
  return (
    <div>
      <Navigation />
      <br />
      <br />
    <Homepage/> 
    <Article />
         <About />
      <Food />
    <CalltoAction />
      <Footer />
    </div>
  )
}

export default App
