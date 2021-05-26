import React from "react";
import Typed from "react-typed";
export const Header = () => {
    return (
        <div id="home" className="header-wrapper">
        <div className="main-info">
        <h1 className="name">Sunil Lama</h1>
        <Typed
        className="typed-text"
        strings={["Software Developer","Front-end enginer","Problem Solver","Critical thinker","Positive attitude","Quick Learning Ability","A Good Team Player","High-End User Focus"]}
        typeSpeed={20}
        backSpeed={20}
        loop
        />
        <a href="/#Contact" className="btn-main-offer">Contact me</a>
        </div>
            
        </div>
    )
}

export default Header;