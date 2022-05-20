import React from 'react'
import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'

const App = () => {
  return (
    <div className='main-app-container'>
      <Header/>
      <Banner/>
      <About />

      
    </div>
  )
}

export default App
