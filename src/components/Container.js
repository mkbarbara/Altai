const Container = ({ children }) => {
  return <div style={containerStyles}>{children}</div>;
};

const containerStyles = {
  maxWidth: "1200px",
  textAlign: "center",
  margin: "0 auto",
  padding: "20px",
};

export default Container;
