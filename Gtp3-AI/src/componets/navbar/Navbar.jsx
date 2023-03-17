import React,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgtp3">What is chat GPT3?</a></p>
          <p><a href="#possibility">Open IA</a></p>
          <p><a href="#features">Case studies</a></p>
          <p><a href="#blog">Library</a></p>
</>
  )
     

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <main className="gpt3__navbar-links_container">
          <Menu/>
        </main>

        <section className="gpt3__navbar-sign">
          <p>Sign in </p>
          <button type="button" >Sign up</button>
      </section>
      <section className="gpt3__navbar-menu"></section>
        {toggleMenu ?
         <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/> 
        :<RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)}/> }

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
             <main className="gpt3__navbar-menu_container-links">
                <Menu/> 

                <section className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in </p>
                <button type="button" >Sign up</button>
                </section>

            </main> 

        </div>

        )}
       </div>
     </div >
  )
}

export default Navbar
