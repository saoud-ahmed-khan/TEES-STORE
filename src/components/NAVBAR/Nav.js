import React from 'react'
import "./nav.css"
import Header from "../../components/pics/header.jpg";
import logo from "../../components/pics/logo.png";
import logoscroll from "../../components/pics/onscrolllogo.png";
import { Link } from "react-router-dom";

export const Nav = () => {
    const [navbar, setNavbar] = React.useState(false);
    const changebackground = () => {
        if (window.scrollY > 60) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    var update = navbar;
    window.addEventListener('scroll', changebackground)
    return (
        <div>
            <header className={update ? 'header active' : 'header'}>
                <img className="logo" src={update ? logoscroll : logo} alt="logo" />
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
                <ul className="menu">
                    <li className="Link"><Link to="/"
                        style={update ? { textDecoration: 'none', border: '2px solid rgb(38, 184, 171)', color: 'rgb(38, 184, 171)' } : { textDecoration: 'none' }}
                    >HOME</Link></li>
                    <li><Link className="link" to="/products"
                        style={update ? { textDecoration: 'none', border: '2px solid rgb(38, 184, 171)', color: 'rgb(38, 184, 171)' } : { textDecoration: 'none'}}
                    >PRODUCTS</Link></li>
                    <li><Link to="*"
                        style={update ? { textDecoration: 'none', border: '2px solid rgb(38, 184, 171)', color: 'rgb(38, 184, 171)' } : { textDecoration: 'none',  }}
                    >ABOUT US</Link></li>
                </ul>
            </header>

            <div>
                <img className="nav-headerpic" src={Header} alt="header pic" />
            </div>

        </div>
    )
}
