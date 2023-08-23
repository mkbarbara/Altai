import BlockWithLine from "./BlockWithLine";

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
      {texts.map((text, index) => (
        <BlockWithLine
          key={index}
          text={text}
          isLastChild={index === texts.length - 1}
        />
      ))}
    </div>
  );
};

export default BlocksWithLines;
