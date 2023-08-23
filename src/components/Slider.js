import Card from "./Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderStyles = {
    margin: "8rem auto",
  };
  
  const sliderContentStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "250px",
  };
  
  const navigationStyles = {
    display: "flex",
    justifyContent: "center",
    gap: ".5rem",
    margin: "6rem 0",
  };
  
  const navButtonStyle = {
    background: "transparent",
    color: "#c0dbe7",
    border: "1px solid #c0dbe7",
    borderRadius: "50%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "1.5rem",
    width: "45px",
    height: "45px",    
  };
  
  const baseCardStyles = {
    position: "absolute",
    transition: "transform 0.3s, z-index 0.3s",
    transformOrigin: "center center",
  };

  return (
    <div style={sliderStyles}>
      <div style={sliderContentStyles}>
        {cards.map((card, index) => {
          let scale = 1;
          let translateX = "0";

          if (index === (currentIndex + 1) % cards.length) {
            scale = 0.9;
            translateX = "60%";
          } else if (index === currentIndex) {
            scale = 1;
            translateX = "0";
          } else if (
            index ===
            (currentIndex - 1 + cards.length) % cards.length
          ) {
            scale = 0.9;
            translateX = "-60%";
          }

          return (
            <div
              key={index}
              style={{
                ...baseCardStyles,
                display: "block",
                zIndex: index === currentIndex ? 1 : 0,
                transform: `scale(${scale}) translateX(${translateX})`,
              }}
            >
              <Card {...card} />
            </div>
          );
        })}
      </div>
      <div style={navigationStyles}>
        <button onClick={handlePrev} style={navButtonStyle}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={handleNext} style={navButtonStyle}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
