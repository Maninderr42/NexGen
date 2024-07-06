import React from "react";

const BlogCard = ({ image, tags, author, description }) => {
  return (
    <div className="blog-card">
      <div className="image-container">
        <img src={image} alt="Blog Post" className="blog-image" />
      </div>
      <div className="blog-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="blog-description">
        <p>{description}</p>
      </div>
      <div className="blog-author">{author}</div>
      <button className="moreDetailButton">Details <i class="uil uil-arrow-up-right"></i></button>
    </div>
  );
};

export default BlogCard;
