import React from 'react';
import '../Style/home.css';

import img from '../assets/233.avif';
import aboutImage from '../assets/6513f3fa13.jpeg';
import aboutImage2 from '../assets/65112028b082e8d7caffaa1c_About201.jpeg';
import aboutImage3 from '../assets/008.avif';
import gromImage1 from '../assets/creative-3367.jpg';
import gromImage2 from '../assets/software-developers52993.avif';
import gromImage3 from '../assets/server-cloud-341.avif';
import gromImage4 from '../assets/digit-15.avif';
import gromImage5 from '../assets/cyber-data-8270.avif';
import serviceImage1 from '../assets/human-7688.avif'
import serviceImage2 from '../assets/server-cloud-341.avif'
import serviceImage3 from '../assets/cyber-data-8270.avif'
import serviceImage4 from '../assets/software-developers52993.avif'
import serviceImage5 from '../assets/business-data-analys11790.avif'
import serviceImage6 from '../assets/digital594.avif'



const Home = () => {
  return (
    <section className='home home__section'>
      <div className='home__container container'>

        {/* Home Content */}
        <div className='home__content'>
          <div className="home__content-data">
            <h3 className='home__title'>ARE YOU READY TO</h3>
            <h1 className='home__subtitle display-1 d-none d-lg-block'>REVOLUTIONIZE YOUR BUSINESS</h1>
            <hr className='home__line'/>
            <p className='home__content-title lead'>We specialize in Digital Transformation, aiming to elevate and expand your online presence. 
            Our mission is to ensure you never miss an opportunity to connect with your customers and grow your business.</p>

            <div className="home__button-data">
              <button className='btn btn-primary button button--flex home__Contactbutton'>Contact us</button>
              <button className='btn btn-outline-primary button button--flex home__Readbutton'>Read More</button>
            </div>
          </div>

          <div className="home__content-image">
          </div>
        </div>
        {/* Home Content End */}

        {/* About Section */}
        <section className="home__about">
          <h1 className='home__about-title'>About us </h1>
          <div className='home__content-about'>
            <div className='home__content-aboutImage'>
              <img src={aboutImage} alt="about" className='aboutImage' />
            </div>

            <div className="home__content_about-Data">
              <button className='button button--flex home__aboutbutton'>About NavGen</button>
              <h2 className='about__title'>Exclusive Technology to Provide IT Solutions</h2>
              <p className='about__subtitle'>We provide expert advice on technology strategy, digital transformation, 
              and IT infrastructure planning, empowering our clients to achieve their business objectives efficiently and effectively.</p>
              <div className="home-dataImg">
                <img src={aboutImage2} alt="about" className='aboutdataImage' />
                <img src={aboutImage3} alt="about" className='aboutdataImage' />
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}

        <section className='home__features'>
          <ul className='feature-list'>
            <li className='feature-item'>
              <div className='feature-dot'></div>
              <div className='feature-content'>
                <h3 className='feature-title'>Intuitive Task Management:</h3>
                <p>Optimize your workflow with our intuitive project management software. Seamlessly create, assign, and track tasks to ensure every team member stays aligned with project objectives and deadlines.</p>              </div>
            </li>
            <li className='feature-item'>
              <div className='feature-dot'></div>
              <div className='feature-content'>
                <h3 className='feature-title'>Real Time Updates:</h3>
                <p>Stay informed with real-time project updates. Receive notification on task completions, project milestones, and any changes to project plans, allowing for quick responses.</p>
              </div>
            </li>
            <li className='feature-item'>
              <div className='feature-dot'></div>
              <div className='feature-content'>
                <h3 className='feature-title'>Interactive Gantt Charts:</h3>
                <p>Visualize project timelines with interactive Gantt charts. Our software offers a dynamic, bird's-eye view of project progress, dependencies, and milestones, enabling proactive planning and decision-making.</p>
              </div>
            </li>
            <li className='feature-item'>
              <div className='feature-dot'></div>
              <div className='feature-content'>
                <h3 className='feature-title'>Customizable Dashboards:</h3>
                <p>Tailor your experience with customizable dashboards. Display key metrics, project timelines, and task lists that matter most to your team, providing a personalized and insightful view of project progress.</p>
              </div>
            </li>
          </ul>
        </section>
        {/* about Section End */}

        {/* grom business */}
        <section className='home__grom'>
          <h1 className='home__grom-title'>How can NexGen innvotions help you grow?</h1>
          <p className='home__grom-subtitle'>Every business has different needs. Be it designing a landing page or building a big e-commerce store, NexGen can help you with every tech challenge. 
            That’s why they call us best IT company in India.</p>
            <div className='home__grom-content'>

              <div className='home__grom-data'>
                <img src={gromImage1} alt="grom" className='gromImage' />
                <h3 className='home__grom-title'>Designing</h3>
                <p>Creating visually appealing and user-friendly interfaces</p>
                <h4>Read More <i className="uil uil-arrow-right"></i> </h4>
              </div>
              <div className='home__grom-data'>
                <img src={gromImage2} alt="grom" className='gromImage' />
                <h3 className='home__grom-title'>Development</h3>
                <p>Building robust and scalable software solutions</p>
                <h4>Read More <i className="uil uil-arrow-right "></i> </h4>
              </div>
              
              <div className='home__grom-data'>
                <img src={gromImage4} alt="grom" className='gromImage' />
                <h3 className='home__grom-title'>Marketing</h3>
                <p>Enhancing your online presence and driving growth.</p>
                <h4>Read More  <i className="uil uil-arrow-right"></i></h4>
              </div>
              <div className='home__grom-data'>
                <img src={gromImage3} alt="grom" className='gromImage' />
                <h3 className='home__grom-title'>Deployment</h3>
                <p>Managing seamless and efficient software launches</p>
                <h4>Read More <i className="uil uil-arrow-right"></i> </h4>
              </div>
              <div className='home__grom-data'>
                <img src={gromImage5} alt="grom" className='gromImage' />
                <h3 className='home__grom-title'>Security</h3>
                <p>Protecting your data and systems with advanced security measures.</p>
                <h4>Read More <i className="uil uil-arrow-right"></i> </h4>
              </div>
            </div>
        </section>
        {/* grom business End */}


        {/* Service start */}
<section className="home__service">
          <h1 className="home__service-title">Service</h1>
          <div className="home__service-content">
            <article className="card">
            <img src={serviceImage1} alt="ai__image" className="card__background"/>

  
              <div className="card__content flow">
                <div className="card__content--container flow">
                  <h2 className="card__title">Artificial Intelligence</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                  <button className="card__button">Details</button>

                </div>
              </div>
            </article>
            
            <article className="card">
            <img src={serviceImage2} alt="cloud__image" className="card__background"/>

              <div className="card__content flow">
                <div className="card__content--container flow">
                  <h2 className="card__title">Cloud Solutions</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                                  <button className="card__button">Details</button>

                </div>
              </div>
            </article>
            <article className="card">
            <img src={serviceImage3} alt="cyber__image" className="card__background"/>

              <div className="card__content flow">
                <div className="card__content--container flow">
                  <h2 className="card__title">Cyber Security</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                <button className="card__button">Details</button>

                </div>
              </div>
            </article>
            <article className="card">
            <img src={serviceImage4} alt="software__image" className="card__background"/>

              <div className="card__content flow">
                <div className="card__content--container flow">
                  <h2 className="card__title">Software Development</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit a. Rerum in
                    
                  </p>
                  <button className="card__button">Details</button>

                </div>
              </div>
            </article>
            <article className="card">
            <img src={serviceImage5} alt="Data Anaytsis__image" className="card__background"/>

              <div className="card__content flow">
                <div className="card__content--container flow">
                  <h2 className="card__title">Data Analytics</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                  <button className="card__button">Details</button>

                </div>
              </div>
            </article>
            <article className="card">
            <img src={serviceImage6} alt="Security__image" className="card__background"/>

              <div className="card__content flow">
                <div className="card__content--container flow">
                  <h2 className="card__title">Database Security</h2>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                  </p>
                  <button className="card__button">Details</button>

                </div>
              </div>
            </article>
          </div>
        </section>
        {/* Service Section End */}


      </div>
    </section>
  );
}

export default Home;
