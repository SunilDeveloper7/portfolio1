import React from "react";
import author from "/Users/sunillama/Assembly25/portfolio1/src/mero.png";
import html from '../Image/html.png'
import css from '../Image/css3.png'
import javascript from '../Image/javascript.png'
import ejs from '../Image/ejs.png'
import react from '../Image/react.png'
import node from '../Image/node-js.png'
import express from '../Image/express.png'
import python from '../Image/python.png'
import mongodb from '../Image/mongodb.png'
import postgresql from '../Image/postgresql.png'
import bootstrap from '../Image/bootstrap.png'
import git from '../Image/git.png'
import linkedin from '../Image/link.png'
import github from '../Image/github.png'

const About = () => {
    return (  
        <div id="about" className="container py-5">
        <div className="row">
        <div className="col-lg-6 col-xm-12">
        <div className="photo-wrap mb-5">
            <img className="profile-Img" src={author} alt="My image..." />
        </div>
        </div>


    <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About me</h1>
            
            <h4>Hello My name is Sunil lama</h4>
            <p>
        I am a software developer with comprehensive knowledge of both front-end and back-end technology.. I thrive in creating structure, order, and quality from complex problems to optimize code efficiently.I love structure and order and I also stand for quality. I like working in a team, 
        I believe we will learn faster and more. As the saying goes two heads are better than one.
        </p>
        <div className="resume_linkedin_github">
                        <button id="resume" type="button"><a href="https://drive.google.com/file/d/1V2TU5NVi2_fPOgqUFKAeOa_I6VrMP18P/view?usp=sharing" target="_blank">Resume</a></button>
                        <button id="linkedin" type="button"><a href="www.linkedin.com/in/sunil-lama-coder" target="_blank">LINKEDIN</a></button>
                        <button id="github" type="button"><a href="https://github.com/SunilDeveloper7" target="_blank">GITHUB</a></button>
                        
        </div>
    
            </div>
            <div className="single_logos_container">
                    <p>{"<Technology>"}</p>
                    <div className="single_logos">
                        <div><img src={html} alt="html"/><p className="lang_text">HTML</p></div>
                        <div><img src={css} alt="css"/><p className="lang_text">CSS</p></div>
                        <div><img src={javascript} alt="javascript"/><p className="lang_text">JavaScript</p></div>
                        <div><img src={react} alt="react"/><p className="lang_text">React.js</p></div>
                        <div><img src={bootstrap} alt="bootstrap"/><p className="lang_text">Bootstrap</p></div>
                        <div><img src={ejs} alt="ejs"/><p className="lang_text">EJS</p></div>
                    </div>
                    <div className="single_logos">
                        <div><img src={node} alt="node"/><p className="lang_text">Node.js</p></div>
                        <div><img src={express} alt="express"/><p className="lang_text">Express.js</p></div>
                        <div><img src={python} alt="python"/><p className="lang_text">Python</p></div>
                        <div><img src={mongodb} alt="mongodb"/><p className="lang_text">MongoDB</p></div>
                        <div><img src={postgresql} alt="postgresql"/><p className="lang_text">PostgreSQL</p></div>
                        <div><img src={git} alt="git"/><p className="lang_text">Git</p></div>
                    </div>
            </div>
    </div>
        </div>
    );
}

export default About;
