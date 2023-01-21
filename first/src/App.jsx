import React from 'react'
import Article from './componets/article/Article'
import Brand from './componets/brand/Brand'
import Cta from './componets/cta/CTA'
import Feature from './componets/feature/Feature'
import Navbar from './componets/navbar/Navbar'

const App = () => {
  return (
    <div>
      <h1>Gpt-3</h1>
      <Navbar/>
      <Brand/>
      <Article/>
      <Cta/>
      <Feature/>
    </div>

  )
}

export default App
