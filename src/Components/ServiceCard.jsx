import React from 'react'
import '../Style/service.css';
import '../Style/home.css';
import '../Style/serviceCard.css'
import { Link } from 'react-router-dom';
import upArrowImage from '../assets/upArrow.svg';
import serviceImage1 from '../assets/human-7688.avif'
import serviceImage2 from '../assets/server-cloud-341.avif'
import linesImage from '../assets/linesImage.svg'
import upperDots from '../assets/upperDots.svg'
import AllServiceImage from '../assets/businessman-is-using-digital-pen-vitual-screen-with-charts.avif'
import serviceImage3 from '../assets/cyber-data-8270.avif'
import serviceImage4 from '../assets/software-developers52993.avif'
import serviceImage5 from '../assets/business-data-analys11790.avif'
import serviceImage6 from '../assets/digital594.avif'



const ServiceCard = () => {
  return (
    <div className="service">
    <div className="service__content-title">
      <img src={upArrowImage} alt="Up Arrow" className='upArrowImage' />
      <div className="service-title">
        <h1>Our Service</h1>
        <h4>We provide dedicated IT services and innovative technology solutions to empower your business</h4>
      </div>
    </div>
    <section className="service__content-data container">
            <div className="service_content-data1">
                <img src={AllServiceImage} alt="" className='serviceImage' />
                <div className="service-Imagetext">
                <h4>With a proven track record of tackling complex IT challenges, our experienced team brings a wealth of knowledge and expertise to every project</h4>
                <p> <strong>Quick Research and Solutions : </strong>
Our team excels in swift research and agile solutions, utilizing the latest industry insights and cutting-edge tools to deliver rapid, effective results.<br/><br/>

<strong>Dedicated Support 24/7 : </strong>

Recognizing that technology never sleeps, our dedicated support team is available around the clock, ensuring uninterrupted service and support, 24/7.</p>
            </div>
        </div>
        <div className="service_content-data2">
          <button className='button button--flex ServiceButton'>Our Service</button>
            <h1 className='serviceCard__title'>We offer a variety of impactful services</h1>
            <section className="home__service">
      <div className="home__service-content">
        <article className="card">
          <img src={serviceImage1} alt="ai__image" className="card__background" />
          <div className="card__content flow">
            <div className="card__content--container flow">
              <h2 className="card__title">Artificial Intelligence</h2>
              <p className="card__description">
              </p>
              <Link to="/service/ai" className="card__button">Details <i class="uil uil-arrow-up-right"></i></Link>
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
              <Link to="/service/cloud" className="card__button">Details <i class="uil uil-arrow-up-right"></i></Link>
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
              <Link to="/service/cyber" className="card__button">Details <i class="uil uil-arrow-up-right"></i></Link>
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
              <Link to="/service/software" className="card__button">Details <i class="uil uil-arrow-up-right"></i></Link>
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
              <Link to="/service/analytics" className="card__button">Details <i class="uil uil-arrow-up-right"></i></Link>
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
              <Link to="/service/dbSecurity" className="card__button">Details <i class="uil uil-arrow-up-right"></i></Link>
            </div>
          </div>
        </article>
      </div>
    </section>


             
        </div>

        {/* <div className="service_content-data3">
            <h1>Benefits & Results</h1>
            <p>Software Development plays a pivotal role in today's digital landscape, offering users a multitude of benefits. It enables the creation of tailored solutions that cater to specific needs and requirements.</p>
        </div> */}


        </section>

        <div className="service__contact-block container serviceCardContact">
          <img src={linesImage} alt="" className='linesImage' />
          <div className="service__contact-data">
            <h1>Ready to Elevate Your Business?</h1>
            <p>Get in touch with our experts today and discover how we can help you achieve your cloud computing goals</p>
            <button className='getStarted button button--flex'> Get Started</button>
            <button className='OurService button button--flex'>Our Service</button>
          </div>
          <img src={upperDots} alt="" className='upperDots' />
        </div>
    </div>
  )
}

export default ServiceCard