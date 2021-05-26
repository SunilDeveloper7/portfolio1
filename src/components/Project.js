import Blog from "../Image/Blog.png"
import codepen from "../Image/codepen.png"

export default function Project () {
    return (
        <div id="Projects" className="project_container">
            <h1>Projects</h1>
                <div className="gif">
                    <div className="project_img">
                        <img src={Blog} alt="Blogpost"/>
                    </div>
                    <h2>Blog Post</h2>
                    <div className="site_github_container">
                        <a href="https://github.com/SunilDeveloper7/P4-client" target="_blank" rel="noreferrer"><span className="frontback" id="front">Frontend:</span><img id="githubIMG_3" src="" alt="GITHUB"></img></a>
                        <a href="https://github.com/SunilDeveloper7/P4-server" target="_blank" rel="noreferrer"><span className="frontback" id="back">Backend:</span><img id="githubIMG_3" src="" alt="GITHUB"></img></a>
                        <span></span><a className="livesite" href="" target="_blank" rel="noreferrer"></a>
                    </div>
                    <p>This application is made from MERNG stack.Users can create,share,delete and save the post and can also register and login to their profile.
                    I worked as both front end as well as Backend developer and learned alot in that week of time</p>
                    <p>(HTML, CSS, MongoDB, Express.js, React.js, Node.js, Graphql)
                    </p>
                </div>
                <div className="gif">
                    <div className="project_img">
                        <img  src={codepen} alt="png"/>
                    </div>
                    <h2>Code News</h2>
                    <div className="site_github_container">
                        <a href="https://github.com/SunilDeveloper7/CodeNews-Server" target="_blank" rel="noreferrer"><img id="githubIMG_2" src="" alt="GITHUB"></img></a>
                        <span></span><a className="livesite" href="" target="_blank" rel="noreferrer"></a>
                    </div>
                    <p>As a team we decided to build a app for student and people in a tech to share their thought and ideas to other people and tech lovers so we tried to create
                    CodeNews app where users can create login and share blogs or post and also can comment or like other users post or blogs.I served as a backend developer with my other team member.w</p>
                    <p>(HTML, CSS, Node.js, Express.js, React,js, PostgreSQL, RESTful APIs) 
                    </p>
                </div>
                <div className="gif">
                    <div className="project_img">
                        <img src="" alt=""/>
                    </div>
                    <h2>AanartaLLC</h2>
                    <div className="site_github_container">
                        <a href="" target="_blank" rel="noreferrer"><img id="githubIMG_2" src="" alt="GITHUB"></img></a>
                        <span></span><a className="livesite" href="" target="_blank" rel="noreferrer"></a>
                    </div>
                    <p>Full stack E-commerce website where users can buy stuff and also securly checkout. Technology use in this is React.js,commerce.js and stripe</p>
                    <ul className="item">
                    <li>Co-ordinated, constructed & deploy a fully functional, responsive eCommerce website </li>
                    <li>Perform and learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions </li>
                    <li> Fully functional eCommerce application using commerce.js,React.js and stripe 
                    Projects </li>
                    </ul>
                    <p>(HTML, CSS, Javascript,React,stripe)</p>
                </div>
        </div>
    )
}