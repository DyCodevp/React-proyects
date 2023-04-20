import React from 'react'
import './App.css'
import { Brand, CTA, Navbar } from './componets'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>

    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA></CTA>
    <Blog></Blog>
    <Footer></Footer>
    </div>

  )
}

export default App
