import React from "react";

const CardWithImage = ({ imageUrl, text }) => {
  const container = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#c0dbe7",
    borderRadius: "12px",
    width: "680px",
    height: "360px",
  };

  const imageContainer = {
    height: "100%",
    width: "40%",
  };

  const textContainer = {
    height: "100%",
    color: "#0D303D",
    fontFamily: "TextRegular",
    whiteSpace: "pre-line",
    width: "60%",
    padding: "0 30px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardImage = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px 0 0 12px",
  };

  return (
    <div style={container}>
      <div style={imageContainer}>
        <img src={imageUrl} alt="Card" style={cardImage} />
      </div>
      <div style={textContainer}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardWithImage;
