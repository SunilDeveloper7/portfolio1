import React from "react";
import author from "/Users/sunillama/Assembly25/portfolio1/src/mero.png";


const About = () => {
    return (  
        <div className="container py-5">
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
                        <a href="www.linkedin.com/in/sunil-lama-coder" target="_blank" rel="noreferrer">linkedin<img id="linkedInIMG"  ></img></a>
                        <a href="https://github.com/SunilDeveloper7" target="_blank" rel="noreferrer">github<img id="githubIMG"  ></img></a>
        </div>
        
            </div>

            </div>
    </div>
        
    );
}

export default About;
