import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import connectImage from '../assets/pikaso_texttoimage_35mm-film-photography-A-young-woman-with-long-wavy (1).jpeg';
import '../Style/consult.css'; // Create a new CSS file for the ConsultForm styles
import emailjs from 'emailjs-com'; // Correct import for emailjs
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConsultForm = ({ isPopupVisible, togglePopup }) => {
  const popupRef = useRef(null);

  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    introduction: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name) {
      toast.error('Name is required');
      return false;
    }
    if (!formData.email) {
      toast.error('Email is required');
      return false;
    }
    if (!formData.phoneNo) {
      toast.error('Phone number is required');
      return false;
    }
    if (!formData.introduction) {
      toast.error('Message is required');
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    emailjs.sendForm('service_tmou7va', 'template_d9swgm3', form.current, 'zKdz7KFDhOH96hoPV')
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phoneNo: '',
          introduction: ''
        });
      })
      .catch((error) => {
        toast.error('Failed to send the message. Please try again later.');
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        togglePopup(event);
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
  }, [isPopupVisible, togglePopup]);

  return (
    <>
      {isPopupVisible && (
        <div className={`overlay ${isPopupVisible ? 'active' : ''}`}>
          <div className="popup" ref={popupRef}>
            <div className="consult__content">
              <img src={connectImage} alt="" className='connectImage' />
              <form className='consult__form' onSubmit={sendEmail} ref={form}>
                <i onClick={togglePopup} className="uil uil-multiply"></i>
                <h4>Connect with Us</h4>
                <p>Searching for a job? Visit our <Link to="/careers" className='goCareersPage'> Careers</Link></p>
                <input 
                  type="text"
                  name="name"
                  placeholder='Full Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='consult__input-data'
                />
                <input
                  type="text"
                  name="phoneNo"
                  placeholder='Mobile with country code'
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className='consult__input-data'
                />
                <input 
                  type="email"
                  name="email"
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='consult__input-data'
                />
                <textarea 
                  name="introduction"
                  placeholder='Brief requirements'
                  value={formData.introduction}
                  onChange={handleChange}
                  className='BriefField consult__input-data'
                ></textarea> 
                <button className='button button--flex consultbutton' type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default ConsultForm;
