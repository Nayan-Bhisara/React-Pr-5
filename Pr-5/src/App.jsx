import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Section from './components/section-1/Section'
import Section1 from './components/section-2/Section1'
import Section3 from './components/section-3/Section3'
import Section4 from './components/section-4/section4'

function App() {

  return (
    <>
      <Header/>
      <Section/>
      <Section1/>
      <Section3/>
      <Section4/>
    </>
  )
}

export default App