import React from "react";
const Languages =() => {
    return(
    <div className="languages">
        <h1 className="py-5"> My Skills</h1>
        <div className="container">
        <div className="row">
        <div className="col-md-3 col-sm-6">
        <div className="box">
            <h3>Frameworks</h3>
            <li>Django</li>
            <li>Express.js</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            
        </div>
        </div>
        <div className="col-md-3 col-sm-6">
        <div className="box">
            <h3> Front-end</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>EJS</li>
        </div>
        </div>
        <div className="col-md-3 col-sm-6">
        <div className="box">
            <h3>Back-end</h3>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Sequlize</li>
            <li>Flask</li>
            <li>Python</li>
        </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="box">
            <h3> Tools</h3>
            <li>Git</li>
            <li>Github</li>
            <li>RESTful</li>
            <li>APIs</li>
        </div>
        </div>
        </div>
        </div>
        
        </div>
    
    )
}

export default Languages;