const Block = ({ text, isLastChild }) => {
  return (
    <div style={blockStyles}>
      <div style={leftLineStyles}></div>
      <div style={topLineStyles}></div>
      <div style={textStyles}>{text}</div>
      {isLastChild && <div style={rightLineStyles} />}
    </div>
  );
};

const blockStyles = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  paddingInline: "10px",
  height: "100%",
};

const leftLineStyles = {
  width: "2px",
  height: "75%",
  backgroundColor: "#2d5470", // Adjust the line color here
  position: "absolute",
  left: 0,
};

const rightLineStyles = {
  width: "2px",
  height: "75%",
  backgroundColor: "#2d5470", // Adjust the line color here
  position: "absolute",
  right: 0,
};

const topLineStyles = {
  width: "75%",
  height: "2px",
  backgroundColor: "#2d5470", // Adjust the line color here
  position: "absolute",
  top: 0,
  left: "12.25%",
};

const textStyles = {
  margin: "0",
  width: "100%",
  padding: "30px",
  textAlign: "center",
  fontFamily: "TextRegular",
  fontSize: ".9rem",
};

export default Block;
