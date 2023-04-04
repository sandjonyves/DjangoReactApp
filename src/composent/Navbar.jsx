import { useRef } from "react"
import {FaTimes,FaBars} from "react-icons/fa"
import "./style/Style_navBar.css";
import { Link } from "react-router-dom";

function Navbar() {
        
         const navref = useRef()

         const shownav = () => {
         
            navref.current.classList.toggle('responsive_bar')
        }
       
    return(
        <header className="  bg-red-300">
        <h3><img src="logo.png" alt="" className="img img-circle" /></h3>
        <nav ref={navref}>
     
            <a href="/" className="home ">home</a>
            <Link to="https://wa.me/+237654340911">contactez-nous</Link>
            <Link to="/cont">bon à savoir</Link>
            <a href="/#">à propos</a>
            <a href="#">se connecter</a>
            <button onClick={shownav} className="nav-btn nav-close-btn">
            <FaTimes/> 
            </button>
        </nav>
        <button onClick={shownav} className="nav-btn ">
            
        <FaBars/>
            </button>
     
         
     </header>
         
    
    )
    
}

export default Navbar