import React from 'react';
import '../Style/about.css';
import '../Style/home.css'
import linesImage from '../assets/linesImage.svg'
import upperDots from '../assets/upperDots.svg'
import aboutImage from '../assets/teamwork-meeting-with-business-people_23-2148825936.avif';
import  FireImage  from '../assets/eco-friendly-fireworks-sustainable-alternative_772298-21322.avif';
import lefttoright from '../assets/lefttorigthArrow.svg'
import righttoleft from '../assets/rightToLeft.svg'
import anaylsisIcon from '../assets/analysisicon.svg'
import proofIcon from '../assets/analysisicon.svg'
import exceutionIcon from '../assets/executiveicon.svg'
import Launchicon from '../assets/launchicon.svg'




const About = () => {
  return (
    <section className='aboutPage container'>
         <div className="aboutPage__title">
                <img src={FireImage} alt="" className='FireImage'/>
                <h1>About Us</h1>
                </div>
        <div className="aboutPage__content">
            <img src={aboutImage} alt="aboutImage" className='aboutImage' />
            <div className='aboutText'>         
                <p>At nexGen Innovation, we deliver cutting-edge technology solutions to drive business success. Our seasoned experts offer custom software development, 
                    cloud solutions, AI, data analytics, cybersecurity, and IT consulting to enhance efficiency and growth. We work closely with clients to provide innovative,
                     high-quality solutions aligned with their goals. Using the latest technologies and industry best practices, our solutions are future-ready, scalable, and secure<br/><br/>
                     Our vision is to be a global leader in software development, known for expertise, quality, and customer satisfaction. Committed to continuous learning and innovation, 
                     we exceed expectations and deliver exceptional results. Contact us today to see how we can help your business thrive in the digital age. At nexGen Innovation, your success is our priority
                     </p>
            </div>
        </div>

        <div className="aboutPage__content-process">
          <button className='button button--flex workProcessButton'>Work Process</button>
          <div className="aboutPage__process-data">
            <div className="process__title">
              <h2>Simple, Powerful & Efficient Process</h2>
              <p>Our meticulously crafted working process ensures a seamless and efficient journey from start to finish. It begins with an in-depth consultation, where we engage closely with you to understand your objectives and vision thoroughly.
<br/><br/>
This initial dialogue lays the foundation for a tailored strategy. Following this, our team of experts springs into action to bring your vision to life.</p>
            </div>
            <div className="process__diagram">
              <button className='button button--flex AnalysisButton '> <img src={anaylsisIcon} alt="" className='diagram__icon' />Analysis & Research</button>
              <img src={righttoleft} alt="" className='righttoleft' />

              <button className='button button--flex proofButton'> <img src={proofIcon} alt="" className='diagram__icon' />Proof of  Concept</button>
                    <img src={lefttoright} alt="" className='lefttoright'/>

              <button className='button button--flex ExectionButton' > <img src={exceutionIcon} alt="" className='diagram__icon'/>Exection  & Test</button>
              <img src={righttoleft} alt="" className='righttoleft Exectionrighttoleft' />

              <button className='button button--flex LaunchButton'> <img src={Launchicon} alt="" className='diagram__icon' />Launch the Product</button>

            </div>
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
  )
}

export default About;
