import React from "react";

const BlogCard = ({ image, tags, author, description }) => {
  return (
    <div className="blog_main_content">
      <div className="blog_post">
        <div className="image_container">
          <img src={image} alt="Blog Post" className="blog_image" />
          <button className="explore_button">Explore</button>
        </div>
        <div className="blog_tags">
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
          <p className="author">{author}</p>
        </div>
        <div className="blog_description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
