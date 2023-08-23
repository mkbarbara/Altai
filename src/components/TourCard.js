import React from "react";
import { Link } from "react-router-dom";

const Card = ({ items }) => {
  const cardStyle = {
    backgroundColor: "#2d5470",
    borderRadius: "18px",
    fontFamily: "TextRegular",
    padding: "30px",
    textAlign: "justify",
    display: "grid",
    gap: "1rem",
    justifyItems: "center",
  };

  const cardHeader = {
    fontSize: "1.5rem",
    textAlign: "center",
    fontFamily: "Title",
    letterSpacing: "1px",
  };

  const cardDesc = {
    fontSize: ".8rem",
  };

  const cardButton = {
    display: "inline-block",
    padding: ".5rem 1rem",
    borderRadius: "6px",
    border: "1px solid #c0dbe7",
    cursor: "pointer",
    backgroundColor: "#2d5470",
    color: "#c0dbe7",
    fontFamily: "TextLight",
    fontSize: ".8rem",
  };

  const imageContainer = {
    width: "300px",
    height: "200px",
    borderRadius: "6px",
  };

  const cardImage = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: "transparent",
    borderRadius: "6px",
  };

  return (
    <>
      {items.map((Val) => {
        return (
            <div key={Val.id} style={cardStyle}>
              <h2 style={cardHeader}>{Val.title}</h2>
              <span style={cardDesc}>{Val.desc}</span>
              <div style={imageContainer}>
                <img src={Val.img} alt={Val.title} style={cardImage} />
              </div>
              <Link to={`/tours/${Val.link}`} style={cardButton}>Узнать подробнее</Link>
            </div>
        );
      })}
    </>
  );
};

export default Card;
