import React from 'react'
import "./nav.css"
import logo from "";
export const Nav = () => {
    return (
        <div>
        <header className="header">
           <a href="/" className="logo"> SPA </a>
           <input className="menu-btn" type="checkbox" id="menu-btn" />
           <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
           <ul className="menu">
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>
       </header>
   </div>
    )
}
