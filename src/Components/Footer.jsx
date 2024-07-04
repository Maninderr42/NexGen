import React from 'react'
import '../Style/footer.css'
import { Link } from 'react-router-dom';
import logo from '../assets/icon.png'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer__content">
            <div className="Footer__company">
                <div className="Footer_company-logo">
                    <img src={logo} alt="" className='logo'/>
                    <p>NexGen Innvotion</p>
                </div>
                <p> 
                At navGen Innovation, we empower businesses with innovative solutions for continuous growth.
                 Our startup thrives in a vibrant ecosystem, rapidly developing and discovering, while listening keenly to dynamic feedback.</p>
                <div className="Footer__hypeLink">
                <a href="/" className="footer__social-icon" target='_blank'>
                <i className="uil uil-instagram"></i>
            </a>
            <a href="/" className="footer__social-icon" target='_blank'>
            <i className="uil uil-dribbble"></i>
            </a>
            <a href="/" className="footer__social-icon" target='_blank'>
            <i className="uil uil-github-alt"></i>
            </a>
            <a href="/" className="footer__social-icon" target='_blank'>
            <i className="uil uil-linkedin"></i>
            </a>
                </div>
                

            </div>
            <div className="Footer__Pages">

                <h3>Useful Links</h3>
                <ul className='footer__list'>
                    <li className='footer__item'>
                    <Link to="/About" className='footer__link'>About</Link>

                    </li>
                    <li className='footer__item'>
                    <Link to="/ServiceCard" className='footer__link'>Service</Link>

                    </li>
                    <li className='footer__item'>
                    <Link to="/Blog" className='footer__link'>Blog</Link>

                    </li>
                    <li className='footer__item'>
                    <Link to="/Career" className='footer__link'>career</Link>

                    </li>
                    <li className='footer__item'>
                    <Link to="/Terms" className='footer__link'>Terms & Conditions</Link>

                    </li>

                </ul>

            </div>
            <div className="Footer__contactUs">

            <h3>Contact Us</h3>
            <ul className='footer__list '>
            <li className='footer__item contactList'>
                Address: Ludhiana, Punjab ,India, 


                    </li>
                    <li className='footer__item contactList'>   phone:+91-8591066565</li>
                    <li className='footer__item contactList'> email:nexgeninnovation.team@gmail.com</li>
            </ul>

            </div>
            <div className="Footer__subscribe">
                <h3>Subscibe Us!</h3>
                <p>Follow us on social media for the latest updates and exclusive content about our software innovations. Stay connected with our journey!</p>

            </div>
        </div>

        <div className="footer__terms">
            <h5>Terms & Coditions</h5>
            <h5>Copyright © 2024 All Rights Reserved</h5>
        </div>
      

    </div>
  )
}

export default Footer