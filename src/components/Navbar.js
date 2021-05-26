import React from 'react'
import logo from "../logo.png";
import {Link, link} from "react-scroll";
//React font awsome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">
        <a className="navbar-brand" href="#"><img className= "logo" src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"yellow"}} />
        </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link smooth={true} to ="home"  className="nav-link" href="#">Home <span className="sr-only">(current)</
                span> </Link>
            </li>
            <li className="nav-item">
    <Link smooth={true} to ="about" offset={-110} className="nav-link" href="#">About me</Link>
    </li>
    <li className="nav-item">
    <Link smooth={true} to="languages" offset={-110} className="nav-link" href="#">Languages</Link>
    </li>
    <li className="nav-item">
    <Link smooth={true} to="Projects" offset={-110} className="nav-link" href="#">Projects</Link>
    </li>
    <li className="nav-item">
    <Link smooth={true} to="Contact" offset={-110} className="nav-link" href="#">Contact</Link>
    </li>
    </ul>
    
    
    </div>
</div>
    </nav>
    )
}

export default Navbar
