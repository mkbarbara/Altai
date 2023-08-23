import BlockWithLine from "./BlockWithLine";
import { Slide } from "react-awesome-reveal";

const BlocksWithLines = ({ texts }) => {
  const numColumns = texts.length;

  const blocksContainerStyles = {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
    maxWidth: "1200px",
    marginTop: "1rem",
  };

  return (
    <div style={blocksContainerStyles}>
    <Slide cascade triggerOnce direction="up" damping={1e-1}>
      {texts.map((text, index) => (
        <BlockWithLine
          key={index}
          text={text}
          isLastChild={index === texts.length - 1}
        />
      ))}
      </Slide>
    </div>
  );
};

export default BlocksWithLines;
