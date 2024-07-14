import React, { useEffect, useRef ,useState } from 'react';
import '../Style/service.css';
import AOS from 'aos';
import '../Style/home.css';
import '../Style/serviceCard.css'
import { Link } from 'react-router-dom';
import upArrowImage from '../assets/upArrow.svg';
import serviceImage1 from '../assets/human-7688.avif';
import serviceImage2 from '../assets/server-cloud-341.avif';
import linesImage from '../assets/linesImage.svg';
import upperDots from '../assets/upperDots.svg';
import AllServiceImage from '../assets/businessman-is-using-digital-pen-vitual-screen-with-charts.avif';
import serviceImage3 from '../assets/cyber-data-8270.avif';
import serviceImage4 from '../assets/software-developers52993.avif';
import serviceImage5 from '../assets/business-data-analys11790.avif';
import serviceImage6 from '../assets/digital594.avif';
import ConsultForm from './ConsultForm';


const ServiceCard = () => {
  const serviceRef = useRef(null);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

 

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            AOS.refreshHard(); // Trigger AOS animation refresh when the element comes into view
          }
        });
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  return (
    <div className="service" ref={serviceRef}>
      <div className="service__content-title">
        <img src={upArrowImage} alt="Up Arrow" className='upArrowImage' data-aos="fade-right" data-aos-delay="280" />
        <div className="service-title">
          <h1 data-aos="fade-down" data-aos-delay="300">Our Service</h1>
          <h4 data-aos="fade-up" data-aos-delay="500">We provide dedicated IT services and innovative technology solutions to empower your business</h4>
        </div>
      </div>
      <section className="service__content-data container">
        <div className="service_content-data1">
          <img src={AllServiceImage} alt="" className='serviceImage' data-aos="fade-up" data-aos-delay="600"/>
          <div className="service-Imagetext" data-aos="fade-up" data-aos-delay="600" >
            <h4>With a proven track record of tackling complex IT challenges, our experienced team brings a wealth of knowledge and expertise to every project</h4>
            <p> <strong>Quick Research and Solutions:</strong>
              Our team excels in swift research and agile solutions, utilizing the latest industry insights and cutting-edge tools to deliver rapid, effective results.<br /><br />

              <strong>Dedicated Support 24/7:</strong>
              Recognizing that technology never sleeps, our dedicated support team is available around the clock, ensuring uninterrupted service and support, 24/7.
            </p>
          </div>
        </div>
        <div className="service_content-data2">
          <button className='button button--flex ServiceButton' data-aos="fade-up" data-aos-delay="700">Our Service</button>
          <h1 className='serviceCard__title'>We offer a variety of impactful services</h1>
          <section className="home__service" data-aos="flip-up">
            <div className="home__service-content">
              <article className="card" >
                <img src={serviceImage1} alt="ai__image" className="card__background" />
                <div className="card__content flow">
                  <div className="card__content--container flow">
                    <h2 className="card__title">Artificial Intelligence</h2>
                    <p className="card__description">
                    </p>
                    <Link to="/service/ai" className="card__button">Details <i className="uil uil-arrow-up-right"></i></Link>
                  </div>
                </div>
              </article>
              <article className="card">
                <img src={serviceImage2} alt="cloud__image" className="card__background" />
                <div className="card__content flow">
                  <div className="card__content--container flow">
                    <h2 className="card__title">Cloud Solutions</h2>
                    <p className="card__description">
                    </p>
                    <Link to="/service/cloud" className="card__button">Details <i className="uil uil-arrow-up-right"></i></Link>
                  </div>
                </div>
              </article>
              <article className="card">
                <img src={serviceImage3} alt="cyber__image" className="card__background" />
                <div className="card__content flow">
                  <div className="card__content--container flow">
                    <h2 className="card__title">Cyber Security</h2>
                    <p className="card__description">
                    </p>
                    <Link to="/service/cyber" className="card__button">Details <i className="uil uil-arrow-up-right"></i></Link>
                  </div>
                </div>
              </article>
              <article className="card">
                <img src={serviceImage4} alt="Security__image" className="card__background" />
                <div className="card__content flow">
                  <div className="card__content--container flow">
                    <h2 className="card__title">Software Development</h2>
                    <p className="card__description">
                    </p>
                    <Link to="/service/software" className="card__button">Details <i className="uil uil-arrow-up-right"></i></Link>
                  </div>
                </div>
              </article>
              <article className="card">
                <img src={serviceImage5} alt="Data Anaytsis__image" className="card__background" />
                <div className="card__content flow">
                  <div className="card__content--container flow">
                    <h2 className="card__title">Data Analytics</h2>
                    <p className="card__description">
                    </p>
                    <Link to="/service/analytics" className="card__button">Details <i className="uil uil-arrow-up-right"></i></Link>
                  </div>
                </div>
              </article>
              <article className="card">
                <img src={serviceImage6} alt="Security__image" className="card__background" />
                <div className="card__content flow">
                  <div className="card__content--container flow">
                    <h2 className="card__title">Database Security</h2>
                    <p className="card__description">
                    </p>
                    <Link to="/service/dbSecurity" className="card__button">Details <i className="uil uil-arrow-up-right"></i></Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <div className="service__contact-block container serviceCardContact" data-aos="fade-up" data-aos-delay="700">
        <img src={linesImage} alt="" className='linesImage' />
        <div className="service__contact-data">
          <h1>Ready to Elevate Your Business?</h1>
          <p>Get in touch with our experts today and discover how we can help you achieve your cloud computing goals</p>
            <button onClick={togglePopup}  className='getStarted button button--flex'> Request a call back</button>
        </div>
        <img src={upperDots} alt="" className='upperDots' />
      </div>
      <ConsultForm isPopupVisible={isPopupVisible} togglePopup={togglePopup} />

    </div>
  )
}

export default ServiceCard;
