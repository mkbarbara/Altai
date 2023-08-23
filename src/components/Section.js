import Container from "./Container";

const Section = ({ title, content }) => {
  return (
    <div style={sectionStyles}>
      {title && <h2 style={sectionTitleStyles}>{title}</h2>}
      <Container>{content}</Container>
    </div>
  );
};

const sectionStyles = {
  margin: "4rem 0",
  minHeight: "100vh",
  overflow: "hidden",
};

const sectionTitleStyles = {
  fontFamily: "Title",
  fontSize: "2rem",
  textAlign: "center",
  letterSpacing: "1px",
};

export default Section;
