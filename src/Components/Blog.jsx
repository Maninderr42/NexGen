import React, { useEffect } from 'react';
import AOS from 'aos';
import BlogCard from "./BlogCard";
import Image1 from "../assets/651bd575b7970eb877551cc9_Blog1.jpg";
import Image2 from "../assets/651bd5f92699bcc1af1edb58_Blog Thumb 7.jpg";
import Image3 from '../assets/651bd451aaca2da0c42e1f72_Blog2.jpg';
import "../Style/blog.css";

const Blog = () => {
  const blogPosts = [
    {
      image: Image1,
      tags: ["Software development"],
      description: "Key tips and tricks for the Software Development"
    },
    {
      image: Image2,
      tags: ["cloud solutions"],
      description: "Unlocking Business Agility with Cloud Solutions"
    },
    {
      image: Image3,
      tags: ["AI and Data analytics"],
      description: "Data analytics and AI: Essential for business success and daily life transformation"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Animation will happen only once
    });
  }, []);


  return (
    
    <section className="blog-container">
      <h1 data-aos="fade-down" data-aos-delay="200">Welcome to the NexGen Innovations Blog!</h1>
      <p className="blog-intro" data-aos="fade-down" data-aos-delay="300">
        Welcome to the Nexgen Innovations Blog! Here, we share industry insights, company news, expert tips, and comprehensive tutorials to keep you informed and inspired in the ever-evolving world of technology.
      </p>
      <div className="blog-cards"  data-aos-delay="500" data-aos="zoom-in">
        {blogPosts.map((post, index) => (
          <BlogCard 
            key={index}
            image={post.image}
            tags={post.tags}
            author={post.author}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
