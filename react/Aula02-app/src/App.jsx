import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './App.css'


function App() {


  return (
    <main className='principal'>
      <Header />
      <Menu />
      <Footer />

    </main>
  )
}

export default App
