import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom/dist";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <Link to="/">
            <img
              className="logg"
              src="https://frameboxx.in/img/logo-yellow.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <ul class="nav">
          <li class="nav-items">
            <Link to='/our-courses'>
            <span class="link-text">Our Courses</span>
            
              <i class="fa-solid fa-house"></i>
            </Link>
          </li>
          <li class="nav-items">
            <Link to='/our-student'>
            <span class="link-text">Our Student</span>
            
              <i class="fa-solid fa-store"></i>
            </Link>
          </li>
          <li class="nav-items">
            <Link to='/about-us'>
            <span class="link-text"> About Us</span>
              <i class="fa-solid fa-user"></i>
            </Link>
          </li>
          <li class="nav-items">
            <Link to='/contact-us'>
            <span class="link-text">Contact Us</span>
              <i class="fa-solid fa-circle-info"></i>
            </Link>
          </li>
        </ul>

        <div className="tog" onClick={toggleMenu}>
          <ion-icon size="large" name="menu-outline"></ion-icon>
        </div>
      </nav>
      {isOpen ? (
        <div onClick={()=>setIsOpen(!isOpen)}  className="mobile-nav" >
          <Link className="mobmen" to='/our-courses'><h3>Our Courses</h3></Link>
          <Link  className="mobmen" to='/our-student' ><h3>Student</h3></Link>
          <Link className="mobmen" to='/about-us'><h3>About Us</h3></Link>
          <Link className="mobmen" to='/contact-us'><h3>Contact Us</h3></Link>
          <Link className="mobmen" to='/'><h3>Whatsapp</h3></Link>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
