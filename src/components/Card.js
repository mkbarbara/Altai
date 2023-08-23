const Card = ({ title, imageSrc }) => {
  const cardStyles = {
    border: "none",
    borderRadius: "8px",
    width: "500px",
    position: "relative",
    overflow: "hidden",
  };

  const imageStyles = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    display: "block",
  };

  const titleStyle = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    fontFamily: "TextRegular",
    fontSize: "1.2rem",
    margin: "15px 0",
    zIndex: 1,
    letterSpacing: "1px",
  };

  const cardShadow = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background:
      "linear-gradient(180deg, hsla(0, 0%, 0%, 0) 50%, hsl(0, 0%, 0%) 125%)",
  };

  return (
    <div style={cardStyles}>
      <img src={imageSrc} alt={title} style={imageStyles} />
      <h2 style={titleStyle}>{title}</h2>
      <div style={cardShadow}></div>
    </div>
  );
};

export default Card;
