import React from "react";
import BlogCard from "./BlogCard";
import "../Style/blog.css";
import Image1 from "../assets/software-developers52993.avif";
import Image3 from '../assets/human-7688.avif';
import Image2 from '../assets/server-cloud-341.avif';





const Blog = () => {
  const blogPosts = [
    {
      image: Image1,
      tags: ["software development"],
      author: "Author One",
      description: "Explore software development with Nexgen Innovations. From startups to enterprises, we deliver user-focused design and agile development. Discover our scalable e-commerce platforms and healthcare management systems powered by Python and React."
    },
    {
      image: Image2,
      tags: ["cloud solutions"],
      author: "Author Two",
      description: "Explore our cloud solutions that offer scalable, secure, and cost-effective options for your business. Learn about our success stories and how we leverage AWS and Azure for optimal performance."
    },
    {
      image: Image3,
      tags: ["AI and data analytics"],
      author: "Author Three",
      description: "Discover the power of AI and data analytics with Nexgen Innovations. We provide insights on leveraging machine learning algorithms and big data to drive business decisions and innovations."
    }
  ];

  return (
    <div className="blog">
      <h1>Welcome to the NexGen Innovations Blog!</h1>
      <p className="blog_intro">
        Welcome to the Nexgen Innovations Blog! Here, we share industry insights, company news, expert tips, and comprehensive tutorials to keep you informed and inspired in the ever-evolving world of technology.
      </p>
      <div className="blog_cards">
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
    </div>
  );
};

export default Blog;
