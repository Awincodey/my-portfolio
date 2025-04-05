import { useEffect } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from "../assets/AWIN123.png"; // Ensure the path is correct

function Navbar() {

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return; // Prevent errors if navbar is null

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define handleScroll function for navigation clicks
  const handleNavClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
  <a href="#Home" onClick={(e) => handleNavClick(e, "Home")}>
    <img src={logo} alt="Awin Logo" />
  </a>
</div>
      <ul className="nav-links">
        <li>
          <a href="#Home" onClick={(e) => handleNavClick(e, "Home")}>Home</a>
        </li>
        <li>
          <a href="#About" onClick={(e) => handleNavClick(e, "About")}>About</a>
        </li>
        <li>
          <a href="#Contact" onClick={(e) => handleNavClick(e, "Contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
