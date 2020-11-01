import React from 'react'
import "./nav.css"
import Header from "../../components/pics/header.jpg";
import logo from "../../components/pics/logo.png";
export const Nav = () => {
    const [navbar,setNavbar]= React.useState(false);
    const changebackground=()=>
    {
        console.log(window.scrollY);
        if(window.scrollY >60) 
        {
            setNavbar(true)    
        } else {
            setNavbar(false)
        }
    }
    var update=navbar;
    window.addEventListener('scroll',changebackground)
    return (
        <div>
        <header className={update?'header active':'header'}>
           <img className="logo" src={logo} alt="logo"/>
           <input className="menu-btn" type="checkbox" id="menu-btn" />
           <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
           <ul className="menu">
               <li>HOME</li>
               <li>PRODUUCTS</li>
               <li>ABOUT US</li>
           </ul>
       </header>
       <div>
               <img  className="nav-headerpic" src={Header} alt="header pic"/>
           </div>
           
   </div>
    )
}
