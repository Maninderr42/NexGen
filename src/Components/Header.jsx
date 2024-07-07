import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/header.css';
import brand from '../assets/117.png';
import ConsultForm from './ConsultForm'; // Import the new ConsultForm component

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = (e) => {
    e.preventDefault(); // Prevent the default action
    setIsPopupVisible(!isPopupVisible);
    setToggle(false); // Close the menu when the popup is toggled
  };

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <header className='header'>
      <nav className="nav container">
        <Link to="/" className='nav__logo'>
          <img src={brand} alt="brand" className='brand__img' />
        </Link>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className="nav__item">
              <Link to="/" className='nav__link' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/About" className='nav__link' onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/ServiceCard" className='nav__link' onClick={closeMenu}>
                Service
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Blog" className='nav__link' onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Careers" className='nav__link' onClick={closeMenu}>
                Careers
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Contact" className='nav__link' onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
            <li className="nav__item">
              <Link to="" onClick={togglePopup} className='nav__link nav__consult'>
                Consult Now
              </Link>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>

      <ConsultForm isPopupVisible={isPopupVisible} togglePopup={togglePopup} /> {/* Use the new component */}
    </header>
  );
}

export default Header;
