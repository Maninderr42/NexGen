import "../Style/careers.css";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="career_card">
      <img src={imgSrc} className="card_Img" alt={title} />
      <div className="card_content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
