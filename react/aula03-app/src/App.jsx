import { useState } from 'react'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'

import './App.css'

function App() {


  return (
    <main className='principal'>
      <Header />
      <Navigation />
      <Content />
    </main>
  )
}

export default App
