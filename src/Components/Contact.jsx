import React, { useState, useRef ,useEffect} from 'react';
import '../Style/contact.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };
  useState(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once:true,
    });
  }, []);
  

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(?(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}\)?$/;

    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.serviceType) tempErrors.serviceType = 'Service Type is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) tempErrors.email = 'Invalid email address';
    if (!formData.phoneNo) tempErrors.phoneNo = 'Phone number is required';
    else if (!phoneRegex.test(formData.phoneNo)) tempErrors.phoneNo = 'Invalid phone number';
    if (!formData.message) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let tempErrors = validateForm();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      Object.values(tempErrors).forEach(error => {
        toast.error(error);
      });
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
          serviceType: '',
          message: ''
        });
        setLoading(false);
      })
      .catch((error) => {
        toast.error('Failed to send the message. Please try again later.');
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  return (
    <section className='contact container'>
      <div className="contact__content" data-aos="fade-up">
        <div className="contact__title">
          <h1>Get in Touch</h1>
          <div className="contact__boxes">
            <div className="box-data contact__box-email" data-aos="fade-up" data-aos-delay="100">
              <i className="uil uil-envelopes box__icon"></i>
              <h3>Chat to us</h3>
              <h4>Our friendly team is here to help</h4>
              <a href="mailto:nexgeninnovation.team@gmail.com" target="_blank" className='box__company-info'>info@nexgen.com</a>
            </div>
            <div className="box-data contact__box-email" data-aos="fade-up" data-aos-delay="150">
              <i className="uil uil-map-marker-alt box__icon"></i>
              <h3>Office</h3>
              <h4>Come say hello at our office HQ.</h4>
              <p className='box__company-info'>Address: Ludhiana, Punjab ,India</p>
            </div>
            <div className="box-data contact__box-email" data-aos="fade-up" data-aos-delay="200">
              <i className="uil uil-calling box__icon"></i>
              <h3>Phone</h3>
              <h4>Mon-Fri from 8am to 5am</h4>
              <a href="tel:+918591066565" className='box__company-info'>+91-8591066565</a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact__content contactUs" data-aos="fade-up" data-aos-delay="300">
        <div className="contactUs__title">
          <h4>Contact Us</h4>
          <h2>Let's talk about your project</h2>
          <p>Drop us a line through the form below and we'll get back to you</p>
        </div>
        <div className="contactUs__content-form">
          <form ref={form} onSubmit={sendEmail} className='contactUs-form' data-aos="fade-up" data-aos-delay="400">
            <input
              type="text"
              name="name"
              placeholder='Full Name*'
              value={formData.name}
              onChange={handleChange}
              className={`contactUs-input-data ${errors.name ? 'error' : ''}`} />

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Email address*'
              className={`contactUs-input-data ${errors.email ? 'error' : ''}`}  />

            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder='Phone No*'
              className={`contactUs-input-data ${errors.phoneNo ? 'error' : ''}`}  />

            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              placeholder='Service Type*'
              className={`contactUs-input-data ${errors.serviceType ? 'error' : ''}`} />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              className={`contactUs-input-data ${errors.message ? 'error' : ''}`}></textarea>

            <button type="submit" className='button button--flex contactUsButton' disabled={loading} >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;

