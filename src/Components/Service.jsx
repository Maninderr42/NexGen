import React from 'react';
import '../Style/service.css';
import upArrowImage from '../assets/upArrow.svg';
import linesImage from '../assets/linesImage.svg'
import upperDots from '../assets/upperDots.svg'
import meetingsFrom from '../assets/-people-working-together-office_52137-37754.avif'

const Service = ({ service }) => {
  const { title, description, content } = service;

  return (
    <div className="service">
      <div className="service__content-title">
        <img src={upArrowImage} alt="Up Arrow" className='upArrowImage' />
        <div className="service-title">
          <h1>{title}</h1>
          <h4>{description}</h4>
        </div>
      </div>
      <section className="service__content-data container">
        {content.map((section, index) => (
          <div key={index}>
            <div className="service_content-data1">
              {section.image && <img src={section.image} alt="" className='serviceImage' />}
              <div className="service-Imagetext">
                <h4>{section.header}</h4>
                <p>{section.text}</p>
              </div>
            </div>
            <div className="service_content-data2">
              <h1>{section.header2}</h1>
              <p>{section.Data}</p>
              {section.list && (
                <ul className='service__list'>
                  {section.list.map((item, idx) => (
                    <li key={idx} className='service__item'>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        <div className="service__content-data3">
          <h1>Benefits & Results</h1>
          <div className="meetingsFrom-container">
            <img src={meetingsFrom} alt="Meetings" className='meetingsFrom' />
          </div>
          <div className="service__data3-item">
            <ul className='service__list2'>
              <li className='service__item2'><strong> Customization:</strong> Tailored software solutions meet the specific needs of the user, enhancing efficiency and productivity.</li>
              <li className='service__item2'><strong> Access to Expertise:</strong> IT companies bring a wealth of experience and expertise to the table, ensuring high-quality and up-to-date solutions.</li>
              <li className='service__item2'><strong> Scalability: </strong>Software can easily adapt to changing business requirements and growth, ensuring long-term value.</li>
              <li className='service__item2'><strong> Cost-Efficiency:</strong> Outsourcing software development often reduces operational costs compared to in-house development.</li>
              <li className='service__item2'><strong> Time Savings</strong>: Professional developers accelerate project timelines, delivering solutions faster than internal teams.</li>
              <li className='service__item2'><strong> Support and Maintenance:</strong> IT companies provide ongoing support and maintenance, ensuring software remains reliable and secure.</li>
            </ul>
          </div>
        </div>

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
      </section>
    </div>
  );
}

export default Service;
