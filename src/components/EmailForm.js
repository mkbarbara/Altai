import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const EmailForm = ({ styleSet }) => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [progress, setProgress] = useState(100);
  const duration = 5;

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = () => {
    switch (styleSet) {
      case "big":
        showMessage();
        break;
      case "small":
        showMessage();
        break;
      default:
        console.log("Unknown style");
    }
  };

  const showMessage = () => {
    setShowSuccess(true);
    setProgress(100);

    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 100 / duration);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setShowSuccess(false);
    }, duration * 1000);
  };

  useEffect(() => {
    if (showSuccess) {
      setProgress(100);
    }
  }, [showSuccess]);

  const emailFormStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: styleSet === "big" ? "4rem" : styleSet === "small" ? "1rem" : 0,
    marginTop: styleSet === "big" ? "4rem" : 0,
  };

  const emailInputStyle = {
    color: "#2d5470",
    padding: styleSet === "big" ? "15px" : styleSet === "small" ? "10px" : 0,
    width: styleSet === "big" ? "600px" : styleSet === "small" ? "300px" : 0,
    fontFamily: "TextRegular",
    fontSize: styleSet === "big" ? "1rem" : styleSet === "small" ? ".75rem" : 0,
    backgroundColor: "#c0dbe7",
    borderRadius: "6px",
    letterSpacing: "-.25px",
  };

  const buttonInputStyle = {
    backgroundColor:
      styleSet === "big"
        ? "#0D303D"
        : styleSet === "small"
        ? "#c0dbe7"
        : "transparent",
    color:
      styleSet === "big"
        ? "#c0dbe7"
        : styleSet === "small"
        ? "#0D303D"
        : "transparent",
    border: "1px solid #c0dbe7",
    borderRadius: "6px",
    padding: styleSet === "big" ? "15px" : styleSet === "small" ? "10px" : 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
  };

  const buttonTextStyle = {
    fontFamily: "TextRegular",
    fontSize: ".75rem",
  };

  const messages = {
    big: "Ваша заявка успешно отправлена. В скором времени мы вышлем Вам всю необходимую информацию по турам на указанный адрес электронной почты.",
    small:
      "Вы успешно подписались на новости. Они будут приходить каждый четверг на указанный Вами адрес электронной почты.",
  };

  return (
    <div style={emailFormStyle}>
      <input
        type="email"
        placeholder="Введите Ваш e-mail"
        value={email}
        onChange={handleInputChange}
        style={emailInputStyle}
      />
      <button onClick={handleButtonClick} style={buttonInputStyle}>
        {styleSet === "big" && <FontAwesomeIcon icon={faArrowRight} beat />}
        {styleSet === "small" && (
          <span style={buttonTextStyle}>Подписаться</span>
        )}
      </button>
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            width: "300px",
            borderRadius: "6px",
          }}
        >
          <p style={{ fontFamily: "TextRegular", textAlign: "justify" }}>
            {messages[styleSet]}
          </p>
          <div>
            <input
              type="range"
              value={progress}
              readOnly
              style={{
                width: "100%",
                height: "5px",
                outline: "none",
                background:
                  "linear-gradient(to right, #2d5470 0%, #2d5470 " +
                  progress +
                  "%, #c0dbe7 " +
                  progress +
                  "%, #c0dbe7 100%)",
                appearance: "none",
              }}
            ></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
