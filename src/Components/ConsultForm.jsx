// ConsultForm.jsx
import React, { useRef, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import connectImage from '../assets/pikaso_texttoimage_35mm-film-photography-A-young-woman-with-long-wavy (1).jpeg';
import '../Style/header.css'; // Create a new CSS file for the ConsultForm styles
import emailjs from 'emailjs-com'; // Correct import for emailjs

const ConsultForm = ({ isPopupVisible, togglePopup }) => {
  const popupRef = useRef(null);

  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    introduction: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (error) {
      setError('');
    }
  };

  const validateForm = () => {
    if (!formData.name) return 'Name is required';
    if (!formData.email) return 'Email is required';
    if (!formData.phoneNo) return 'Phone number is required';
    if (!formData.introduction) return 'Message is required';
    return '';
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    emailjs.sendForm('service_8rtdkrf', 'template_ef0dflh', form.current, 'Dl9G7b8lQksPXRiv7')
    .then(() => {
      setFormData({
        name: '',
        email: '',
        phoneNo: '',
        introduction: ''
      });
      setError('');
      alert('Your message has been sent successfully!');
      
    })
    .catch((error) => {
      alert('Failed to send the message. Please try again later.');
      console.error('EmailJS Error:', error);
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
                  required
                />
                <input
                  type="text"
                  name="phoneNo"
                  placeholder='Mobile with country code'
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className='consult__input-data'
                  required
                />
                <input 
                  type="email"
                  name="email"
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='consult__input-data'
                  required
                />
                <textarea 
                  name="introduction"
                  placeholder='Brief requirements'
                  value={formData.introduction}
                  onChange={handleChange}
                  className='BriefField consult__input-data'
                  required
                ></textarea> 
                {error && <p className="error">{error}</p>}
                <button className='button button--flex consultbutton' type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultForm;
