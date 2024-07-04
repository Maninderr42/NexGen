import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Style/header.css';
import brand from '../assets/117.png';
import connectImage from '../assets/pikaso_texttoimage_35mm-film-photography-A-young-woman-with-long-wavy (1).jpeg'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    };

    if (isPopupVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <header className='header'>
      <nav className="nav container">
        <Link to="/" className='nav__logo'>
          <img src={brand} alt="brand" className='brand__img' />
        </Link>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className="nav__item">
              <Link to="/" className='nav__link'>
                <i className="uil uil-estate nav__icon"></i>Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/About" className='nav__link'>
                <i className="uil uil-estate nav__icon"></i>About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/ServiceCard" className='nav__link'>
                <i className="uil uil-estate nav__icon"></i>Service
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Blog" className='nav__link'>
                <i className="uil uil-estate nav__icon"></i>Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Careers" className='nav__link'>
                <i className="uil uil-estate nav__icon"></i>Careers
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/ContactUs" className='nav__link'>
                <i className="uil uil-estate nav__icon"></i>Contact Us
              </Link>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>

        <div className="nav__profile">
          <div className="link_wrapper">
            <Link to="" onClick={togglePopup} className='btn'>Consult Now</Link>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>

      {isPopupVisible && (
        <div className={`overlay ${isPopupVisible ? 'active' : ''}`}>
          <div className="popup" ref={popupRef}>
            <div className="consult__content">

            <img src={connectImage} alt="" className='connectImage' />

              <form className='conult__form'>
              <i onClick={togglePopup} class="uil uil-multiply"></i>

                <h4>Connect with Us</h4>
                <p>Searching for a job? Visit our <Link to="/careers" className='goCareersPage'> Careers</Link></p>
                <input type="text" name="name" placeholder='Full Name' className='consult__input-data' required/>
                <input type="number" name="number" placeholder='Mobile with country code'className='consult__input-data'required />
                <input type="text" name="email" placeholder='Email Address'className='consult__input-data'required />
                <textarea name="introduction" placeholder='Brief requirements' className='BriefField consult__input-data' required></textarea> 
                <button className='button button--flex consultbutton'>Submit</button>
              </form>


            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
