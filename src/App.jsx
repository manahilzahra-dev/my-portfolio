// import React from 'react'
import About from './components/about'
import Contact from './components/Contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skill from './components/Skill'

const App = () => {
  return (
    <div className='bg-[#0B0F19] min-h-screen w-full '>
    <Navbar/>
    <Hero />
    <About/>
    <Skill/>
    <Project/>
    <Contact />
    <Footer/>
    </div>
  )
}

export default App
