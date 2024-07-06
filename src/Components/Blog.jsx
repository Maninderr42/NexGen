import React from "react";
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

  return (
    <section className="blog-container">
      <h1>Welcome to the NexGen Innovations Blog!</h1>
      <p className="blog-intro">
        Welcome to the Nexgen Innovations Blog! Here, we share industry insights, company news, expert tips, and comprehensive tutorials to keep you informed and inspired in the ever-evolving world of technology.
      </p>
      <div className="blog-cards">
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
