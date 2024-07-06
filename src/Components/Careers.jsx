import React from "react";
import img1 from "../assets/c2.avif";
import "../Style/careers.css";
import Card from "./Card";
import Img1 from "../assets/career-icon-1.png";
import Img2 from "../assets/career-icon-2.png";
import Img3 from "../assets/career-icon-3.png";
import Img4 from "../assets/careerly-icon-4.png";
import Img5 from "../assets/careerly-icon-5.png";
import Img6 from "../assets/careerly-icon-6.png";


const Careers = () => {
  const cardDataLeft = [
    {
      imgSrc: Img1,
      title: "Large Beautiful Office",
      description: "Our office is located in the heart of the city, with a large and beautiful office space."
    },
    {
      imgSrc: Img2,
      title: "Easy Location",
      description: "Commute easily to work at your convenience and enjoy compensation for transport costs."
    },
    {
      imgSrc: Img3,
      title: "Free Lunch & Snacks",
      description: "Enjoy free delicious meals prepared by our trusted vendors for lunch and for snacks."
    }
  ];
  const cardDataRight = [
    {
      imgSrc: Img4,
      title: "Great Co-Workers",
      description: "Work with some of the best talent in the industry and build strong networks with them."
    },
    {
      imgSrc: Img5,
      title: "Education Opportunity",
      description: "Get resources for developing your skills and knowledge to kickstart your career."
    },
    {
      imgSrc: Img6,
      title: "Performance Award",
      description: "Get awarded for better performance every 6 months and be recognized for your work."
    }
  ];

  return (
    <div className="careers_page container">
      <div className="careers_content">
        <h1>Let's Grow Together</h1>
        <p>
          We're building a culture at NexGen where amazing people (like you) can
          do their best work. If you're ready to grow your career and help
          millions of organizations grow better, you've come to the right place.
        </p>
        <button className="careers_button button button--flex">Contact us</button>
      </div>

      <img src={img1} className="careers_img" alt="Careers" />

      <div className="culture_card">
        <div className="left_card">
          {cardDataLeft.map((data, index) => (
            <Card key={index} imgSrc={data.imgSrc} title={data.title} description={data.description} />
          ))}
        </div>
        <div className="right_card">
          {cardDataRight.map((data, index) => (
            <Card key={index} imgSrc={data.imgSrc} title={data.title} description={data.description} />
          ))}
        </div>
      </div>
      <div className="culture_content">
        <h1>Join Our Team At NexGen</h1>
        <p>
          At NexGen Innovations, we believe in working together and working
          hard. With our rapidly growing client base, we are looking for dynamic
          and creative individuals who are willing to dedicate themselves to
          providing innovative software solutions.
        </p>
        <p>
          Our services range from
          software development, web development, and app development to AI,
          cloud solutions, and more. Besides getting the opportunity to unlock
          your true potential, at NexGen Innovations you can also network with
          some of the most talented people in the industry, go on annual picnics
          outside the country, and enjoy many other benefits by working with us.
        </p>
        <button className="career_button">Learn more</button>
      </div>
    </div>
  );
};

export default Careers;
