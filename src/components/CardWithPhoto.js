import React from "react";

const CardWithPhoto = ({ photo, title, text }) => {
  const cardContent = {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    gap: "1rem",
    position: "relative",
  };

  const cardText = {
    border: "1px solid #c0dbe7",
    borderRadius: "6px",
    display: "grid",
    width: "250px",
    height: "450px",
    alignItems: "flex-end",
    padding: "20px",
    fontFamily: "TextRegular",
  };

  const cardTitle = {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  };

  const cardDesc = {
    fontSize: ".9rem",
    textAlign: "left",
  };

  const cardImageContainer = {
    position: "absolute",
    top: "20px",
    width: "350px",
    height: "250px",
    border: "1px solid #c0dbe7",
    borderRadius: "6px",
  };

  const cardImage = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "6px",
  };

  return (
    <article style={cardContent}>
      <div style={cardImageContainer}>
        <img src={photo} alt={title} style={cardImage}></img>
      </div>
      <div style={cardText}>
        <div style={{ height: "40%" }}>
          <div style={cardTitle}>{title}</div>
          <div style={cardDesc}>{text}</div>
        </div>
      </div>
    </article>
  );
};

export default CardWithPhoto;
