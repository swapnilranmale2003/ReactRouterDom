import React,{useState} from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    const[menuOpen, setMenuOpen]=useState(false);
  return (
    <nav>
        <Link to="/" className='title'>Website</Link>
        <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span> 
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen? "open":""}>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/product">Products</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact Us</NavLink>
        </li>
        </ul>
    </nav>
  )
}
