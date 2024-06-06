import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[menu,setMenu]=useState("")
return (
    <div className='navbar'>
    <img src='logo1.png' className="logo" />
    <ul className='navbar-menu'>
        <li className={menu==="home"?"active":""} onClick={()=> setMenu("home")}>
        <Link to='/Home'  style={{ color: 'inherit', textDecoration: 'inherit'}} >HOME</Link>
        </li>
        <li className={menu==="products"?"active":""} onClick={()=> setMenu("products")}>
        <Link to='/Products1' style={{ color: 'inherit', textDecoration: 'inherit'}} >PRODUCTS</Link>
        </li>
        <li  className={menu==="gallery"?"active":""} onClick={()=> setMenu("gallery")}>
        <Link to='/Gallery1' style={{ color: 'inherit', textDecoration: 'inherit'}}>GALLERY</Link>
        </li>
        <li className={menu==="contact"?"active":""} onClick={()=> setMenu("contact")}>
        <Link to='/Contact' style={{ color: 'inherit', textDecoration: 'inherit'}}  >CONTACT</Link>
        </li>
    <button className='banner_button' >LOGIN</button>
    </ul>
    </div>
    
  )
}

export default Navbar
