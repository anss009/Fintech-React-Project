import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/navbar/Nav'
import Hero from './components/hero/Hero'
import Feature from './components/features/Feature'

function App() {
      

  return (
    <>
   <Nav/>
   <Hero/>
   <Feature/>
    </>
  )
}

export default App
