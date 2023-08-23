const ContactInfo = ({ phoneNumber, email, region, town, address }) => {
  const contactStyle = {
    display: "grid",
    gap: "1rem",
    textAlign: "left",
  };

  const contactItemStyle = {
    display: "grid",
    fontFamily: "TextRegular",
    fontSize: ".9rem",
  };

  return (
    <div style={contactStyle}>
      <span style={contactItemStyle}>{phoneNumber}</span>
      <span style={contactItemStyle}>{email}</span>
      <div style={contactItemStyle}>
        <span>{region}</span>
        <span>{town}</span>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
