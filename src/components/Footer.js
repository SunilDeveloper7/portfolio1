import React from "react"
import {
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
    
    
} from "react-share"


const Footer =()=> {
    return (
        <div className="footer">
        <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="d-felx">
        <p>San Pablo,California</p>
        </div>
        <div className="d-felx">
        <a href="tel:555-555-5555">+1(510)365-9852</a>
        </div>
        <div className="d-felx">
        <p>sunnil474@gmail.com</p>
        </div>
        </div>
        <div className="col-lg-3 col-md-2 col-sn-6">
        <div className="row">
        <div className="col">
        <a className="footer-nav">Home</a>
        <br/>
        <a className="footer-nav">About me</a>
        <br/>
        <a className="footer-nav">Project</a>
        <br/>

        </div>
        <div className="col">
        <a className="footer-nav">Languages</a>
        <br/>
        <a className="footer-nav">Contact</a>
        <br/>
    
        </div>
        </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
        <div className="d-flex justify-content-center">
        <LinkedinShareButton>
        <LinkedinIcon className="mx-3 size={36}"/>
        </LinkedinShareButton>
        <EmailShareButton>
        <EmailIcon className="mx- size={36}"/>
        </EmailShareButton>
        </div>
        <p className="pt-3 text-center">
        &copy;
        {new Date().getFullYear()}&nbsp;Sunil lama
        </p>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Footer;