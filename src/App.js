import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
    params={{
      particles: {
        number:{
          value:30,
          density: {
            enable:true,
            value_area:900
          }
        },
        shape: {
          type:"circle",
          stroke: {
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }} />
    <Navbar />
    <Header />
    <About />
    <Languages />
    <Project />
    <Contact />
    <Footer />
    

    </>
  );
  }
export default App;