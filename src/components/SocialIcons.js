import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faTelegram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  const iconsContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
  };

  const iconStyle = {
    fontSize: "24px",
    cursor: "pointer",
    color: "#c0dbe7",
  };

  return (
    <div style={iconsContainer}>
      <Link to={"https://t.me/altayputeshestvennik"}>
        <FontAwesomeIcon icon={faTelegram} style={iconStyle} />
      </Link>
      <Link to={"https://web.whatsapp.com/"}>
        <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
      </Link>
      <Link
        to={
          "https://www.youtube.com/channel/UC7dj5XEd1L5RI3BOxfIrMRQ?ysclid=lljl1oxm8q431134452"
        }
      >
        <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
      </Link>
    </div>
  );
};

export default SocialIcons;
