import * as images from "../images";

const ImageWithBackground = ({ text, imageURL }) => {
  const container = {
    position: "relative",
  };

  const textWithBackgroundStyles = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: "cover",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "20rem",
    fontFamily: "Title",
    letterSpacing: "-2rem",
    textAlign: "center",
    backgroundClip: "text",
    margin: 0,
    padding: 0,
    height: "270px",
    zIndex: 1,
    position: "relative",
  };

  const commentMainStyles = {
    fontFamily: "Title",
    fontSize: "6rem",
    textTransform: "uppercase",
    letterSpacing: "-.5rem",
    zIndex: 1,
    position: "relative",
  };

  const cloudStyles = {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    opacity: "0.9",
    animation: "moveCloud 40s linear infinite",
  };

  const cloudSecondStyles = {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    opacity: "0.9",
    animation: "moveCloud2 50s linear infinite",
  };

  return (
    <div style={container}>
      <p style={textWithBackgroundStyles}>{text}</p>
      <span style={commentMainStyles}>Путешествуй дома</span>
      <img src={images.Cloud} alt={"Cloud"} style={cloudStyles} />
      <img src={images.Cloud2} alt={"Cloud2"} style={cloudSecondStyles} />
    </div>
  );
};

export default ImageWithBackground;
