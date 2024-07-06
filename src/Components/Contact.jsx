import React, { useState ,useRef} from 'react'
import '../Style/contact.css'
import emailjs from 'emailjs-com'; // Correct import for emailjs




const Contact = () => {

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');


    const form = useRef();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNo: '',
      servcieType:'', 
      message: ''
    });


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
      if (errors[name]) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
      }
    };
  

    const validateForm = () => {
      let tempErrors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\(?(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}\)?$/;

      if (!formData.name) tempErrors.name = 'Name is required';
      if (!formData.servcieType) tempErrors.name = 'Servcie Type is required';
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
        return;
      }

      emailjs.sendForm('service_8rtdkrf', 'template_ef0dflh', form.current, 'Dl9G7b8lQksPXRiv7')
      .then(() => {
        setSuccessMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phoneNo: '',
          serviceType:'',
          message: ''
        });
        setTimeout(() => {
          setSuccessMessage('');
        }, 8000);
      })
      .catch((error) => {
        alert('Failed to send the message. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  };

   
      

  return (
    <section className='contact container'>
        <div className="contact__content">
            <div className="contact__title">
                <h1>Get in Touch</h1>
                <div className="contact__boxes">
                    <div className="box-data contact__box-email">
                    <i className="uil uil-envelopes box__icon"></i>
                        <h3>chart to us</h3>
                        <h4>Our friendly team is here to help</h4>
                        <a href="mailto:nexgeninnovation.team@gmail.com" target="_blank" className='box__company-info'>info@nexgen.com</a>
                    </div>
                    <div className="box-data contact__box-email">
                    <i className="uil uil-map-marker-alt box__icon"></i>
                        <h3>Office</h3>
                        <h4>Come say hello at our office HQ.</h4>
                        <p className='box__company-info'>Address: Ludhiana, Punjab ,India</p>


                    </div>
                    <div className="box-data contact__box-email">
                    <i className="uil uil-calling box__icon"></i>
                        <h3>phone</h3>
                        <h4>Mon-Fri from 8am to 5am</h4>
                        <a href="" className='box__company-info'>+91-8591066565</a>

                    </div>

                </div>
            </div>
        </div>
        <div className="contact__content contactUs">
            <div className="contactUs__title">
                <h4>Contact Us</h4>
                <h2>Let's talk about your project</h2>
                <p>Drop us a line through the form below and we'll get back to you</p>
            </div>
            <div className="contactUs__content-from">
                <form ref={form} onSubmit={sendEmail} className='contactUs-form'>
                {successMessage && (<div className="successMessage"><p>Message sent successfully </p></div>)}
                    <input 
                    type="text"
                     name="name" 
                      placeholder='Full Name*'
                      value={formData.name}
                       onChange={handleChange}
                       className='contactUs-input-data'
                        required/>
                         {errors.name && <p className="error">{errors.name}</p>}


                    <input type="text"
                     name="email" 
                     value={formData.email}
                     onChange={handleChange}
                     placeholder='Email address*'
                      className='contactUs-input-data' required />

                {errors.email && <p className="error">{errors.email}</p>}


                    <input 
                    type="text" 
                    name="phoneNo" 
                    value={formData.phoneNo}
                    onChange={handleChange} 
                    placeholder='Phone No*'
                     className='contactUs-input-data' required/>

{errors.phoneNo && <p className="error">{errors.phoneNo}</p>}


<input 
                    type="test" 
                    name="servcieType" 
                    value={formData.serviceType}
                    onChange={handleChange} 
                    placeholder='Service Type*'
                     className='contactUs-input-data' required/>

{errors.serviceType && <p className="error">{errors.serviceType}</p>}

                    <textarea name="message" 
                     value={formData.message}
                     onChange={handleChange}
                    placeholder='Message' 
                    className='contactUs-input-data' ></textarea> 
                              {errors.message && <p className="error">{errors.message}</p>}



             
            
                    
                   
                    <button type="submit" className='button button--flex contactUsButton'>Send</button>


                </form>
            </div>
        </div>

    </section>
  )
} 

export default Contact
