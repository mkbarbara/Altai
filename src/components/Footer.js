import LinkList from "./LinkList";
import SocialIcons from "./SocialIcons";
import EmailForm from "./EmailForm";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  const footerDivider = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const footerLine = {
    width: "40%",
    height: "1px",
    backgroundColor: "#c0dbe7",
  };

  const footerDividerText = {
    fontFamily: "Title",
    fontSize: "3rem",
    letterSpacing: "-4px",
  };

  const footerStyles = {
    display: "flex",
    justifyContent: "space-between",
  };

  const socialStyle = {
    display: "grid",
    gap: "1rem",
    alignItems: "flex-end",
  };

  return (
    <div>
      <div style={footerDivider}>
        <div style={footerLine}></div>
        <div style={footerDividerText}>Алтай</div>
        <div style={footerLine}></div>
      </div>
      <div style={footerStyles}>
        <div style={{ width: "20%" }}>
          <LinkList
            links={["Алтай", "Все туры", "Команда", "Галерея"]}
            ways={["/altai", "/tours", "/team", "/gallery"]}
          />
        </div>
        <div style={socialStyle}>
          <div></div>
          <SocialIcons />
          <EmailForm styleSet="small" style={{ marginTop: "10px" }} />
        </div>
        <div style={{ width: "20%", display: "grid" }}>
          <ContactInfo
            phoneNumber="+7 385 900 99 99"
            email="altours@mail.ru"
            region="Республика Алтай,"
            town="г. Горно-Алтайск,"
            address="ул. Ленкина, д. 5"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
