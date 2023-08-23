import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as images from "../images";
import Fade from "react-reveal/Fade";

const imagesInfo = [
  { src: images.Galery1, type: "horizontal" },
  { src: images.Galery2, type: "horizontal" },
  { src: images.Galery3, type: "vertical" },
  { src: images.Galery4, type: "vertical" },
  { src: images.Galery5, type: "horizontal" },
  { src: images.Galery6, type: "horizontal" },
  { src: images.Galery7, type: "vertical" },
  { src: images.Galery8, type: "vertical" },
];

const Gallery = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openFullScreen = (imageSrc) => {
    setFullScreenImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
    document.body.style.overflow = "auto";
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  const imageContainerStyle = {
    marginBottom: "2rem",
    borderRadius: "12px",
    border: "8px solid #c0dbe7",
    backgroundColor: "#c0dbe7",
    cursor: "pointer",
  };

  const verticalImageStyle = {
    width: "400px",
    height: "500px",
  };

  const horizontalImageStyle = {
    width: "500px",
    height: "300px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
    transition: "transform 0.3s ease-in-out",
  };

  const fullScreenStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  };

  const fullScreenOverlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    background: "#0D303D",
    borderRadius: "6px",
    zIndex: 1001,
    fontFamily: "TextRegular",
    textAlign: "center",
  };

  const closeIconStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
  };

  const fullScreenImageStyle = {
    width: "600px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "6px",
  };

  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Section
        content={
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <div style={{ ...columnStyle, alignItems: "flex-end" }}>
              {imagesInfo.map(
                (image, index) =>
                  index % 2 !== 0 && (
                    <Fade bottom>
                      <div
                        key={index}
                        style={{
                          ...imageContainerStyle,
                          ...(image.type === "vertical"
                            ? verticalImageStyle
                            : horizontalImageStyle),
                        }}
                        onClick={() => openFullScreen(image.src)}
                      >
                        <img
                          style={imageStyle}
                          src={image.src}
                          alt={`${index}`}
                        />
                      </div>
                    </Fade>
                  )
              )}
            </div>
            <div style={{ ...columnStyle, marginTop: "8rem" }}>
              {imagesInfo.map(
                (image, index) =>
                  index % 2 === 0 && (
                    <Fade bottom>
                      <div
                        key={index}
                        style={{
                          ...imageContainerStyle,
                          ...(image.type === "vertical"
                            ? verticalImageStyle
                            : horizontalImageStyle),
                        }}
                        onClick={() => openFullScreen(image.src)}
                      >
                        <img
                          style={imageStyle}
                          src={image.src}
                          alt={`${index}`}
                        />
                      </div>
                    </Fade>
                  )
              )}
            </div>
          </div>
        }
      ></Section>
      <Container>
        <Footer />
      </Container>
      {fullScreenImage && (
        <div style={fullScreenStyle}>
          <div style={fullScreenOverlayStyle}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={closeFullScreen}
              style={closeIconStyle}
            />
            <img
              src={fullScreenImage}
              alt="Full-Screen"
              style={fullScreenImageStyle}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
