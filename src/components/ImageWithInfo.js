import React, { useState } from "react";
import CardWithImage from "./CardWithImage";

const ImageWithInfo = ({
  leftTextBlocks,
  imageUrl,
  rightTextBlocks,
  cardImages,
  cardTexts,
}) => {
  const [hoverStates, setHoverStates] = useState(
    Array(leftTextBlocks.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = true;
    setHoverStates(updatedHoverStates);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = false;
    setHoverStates(updatedHoverStates);
  };

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleTextClick = (index) => {
    setSelectedCardIndex(index);
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = !updatedHoverStates[index];
    setHoverStates(updatedHoverStates);
  };

  const textBlock = {
    display: "grid",
    gap: "1.5rem",
  };

  const textItem = {
    fontFamily: "TextRegular",
    fontSize: "1.5rem",
    border: "2px solid #c0dbe7",
    padding: "10px 20px",
    borderRadius: "6px",
    letterSpacing: "2px",
    width: "150px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const mainImage = {
    width: "680px",
    height: "360px",
    objectFit: "cover",
    borderRadius: "12px",
  };

  return (
    <div style={container}>
      <div style={textBlock}>
        {leftTextBlocks.map((text, index) => (
          <div
            key={index}
            onClick={() => handleTextClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              ...textItem,
              backgroundColor:
                selectedCardIndex === index
                  ? "#c0dbe7"
                  : hoverStates[index]
                  ? "#c0dbe7"
                  : "#0D303D",
              color:
                selectedCardIndex === index
                  ? "#0D303D"
                  : hoverStates[index]
                  ? "#0D303D"
                  : "#c0dbe7",
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <div>
        {selectedCardIndex !== null ? (
          <CardWithImage
            imageUrl={cardImages[selectedCardIndex]}
            text={cardTexts[selectedCardIndex]}
          />
        ) : (
          <img src={imageUrl} alt="mainImage" style={mainImage} />
        )}
      </div>
      <div style={textBlock}>
        {rightTextBlocks.map((text, index) => (
          <div
            key={index}
            onClick={() => handleTextClick(index + leftTextBlocks.length)}
            onMouseEnter={() => handleMouseEnter(index + leftTextBlocks.length)}
            onMouseLeave={() => handleMouseLeave(index + leftTextBlocks.length)}
            style={{
              ...textItem,
              backgroundColor: hoverStates[index + leftTextBlocks.length]
                ? "#c0dbe7"
                : "#0D303D",
              color: hoverStates[index + leftTextBlocks.length]
                ? "#0D303D"
                : "#c0dbe7",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageWithInfo;
