import React, { useState, useEffect } from "react";
import companyLogo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronDown,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import * as images from "../images";

const Header = () => {
  const [showImage, setShowImage] = useState(false);
  const location = useLocation();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, [location]);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = "auto";
  };

  const header_style = {
    headerStyles: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "Title",
    },

    imageContainerStyles: {
      display: "flex",
      justifyContent: "center",
    },

    logoStyles: {
      width: "auto",
      height: "50px",
    },

    buttonContainerStyles: {
      display: "flex",
      justifyContent: "center",
    },

    buttonStyles: {
      display: "inline-block",
      padding: "1rem 1rem",
      borderRadius: "6px",
      borderColor: "#c0dbe7",
      borderWidth: "1px",
      borderStyle: "solid",
      cursor: "pointer",
      backgroundColor: "#0D303D",
      fontFamily: "Title",
      fontSize: "1.2rem",
      letterSpacing: "1px",
      color: "#c0dbe7",
    },

    centerBlockStyles: {
      display: "flex",
      justifyContent: "space-between",
      textWrap: "nowrap",
    },
    popupStyles: {
      transition: "top .3s ease",
      position: "fixed",
      top: isPopupOpen ? 0 : "-150%",
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    popupContentStyles: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "50px",
      background: "#0D303D",
      borderRadius: "6px",
      zIndex: 1001,
      fontFamily: "TextRegular",
      textAlign: "center",
    },
    inputContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1rem",
      margin: "40px 0",
      alignItems: "center",
    },
    inputStyle: {
      backgroundColor: "#c0dbe7",
      color: "#0D303D",
      fontFamily: "TextRegular",
      fontSize: "1rem",
      width: "300px",
      height: "30px",
      borderRadius: "6px",
      padding: "10px",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    blockStyles: {
      padding: "0.5rem 1rem",
      margin: "0 1.5rem",
      borderRadius: "4px",
      textDecoration: "none",
      fontFamily: "Title",
      fontSize: "1.2rem",
      letterSpacing: "1px",
      color: "#c0dbe7",
      zIndex: 1,
    },
  };

  return (
    <header style={header_style.headerStyles}>
      <div style={header_style.imageContainerStyles}>
        <Link to="/">
          <img src={companyLogo} alt="Logo" style={header_style.logoStyles} />
        </Link>
      </div>
      <div style={header_style.centerBlockStyles}>
        <div style={header_style.container}>
          <Link to="/altai" style={header_style.blockStyles}>
            Алтай
          </Link>
          <div
            style={{
              opacity: showImage ? "0.4" : "0",
              display: location.pathname === "/altai" ? "block" : "none",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "opacity .3s ease",
            }}
          >
            <img
              src={images.Cloud}
              alt="click on me"
              style={{ width: "200px", height: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
        <div style={header_style.container}>
          <Link to="/tours" style={header_style.blockStyles}>
            Все туры
          </Link>
          <div
            style={{
              opacity: showImage ? "0.4" : "0",
              display: location.pathname === "/tours" ? "block" : "none",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "opacity .3s ease",
            }}
          >
            <img
              src={images.Cloud}
              alt="click on me"
              style={{ width: "200px", height: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
        <div style={header_style.container}>
          <Link to="/team" style={header_style.blockStyles}>
            Команда
          </Link>
          <div
            style={{
              opacity: showImage ? "0.4" : "0",
              display: location.pathname === "/team" ? "block" : "none",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "opacity .3s ease",
            }}
          >
            <img
              src={images.Cloud}
              alt="click on me"
              style={{ width: "200px", height: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
        <div style={header_style.container}>
          <Link to="/gallery" style={header_style.blockStyles}>
            Галерея
          </Link>
          <div
            style={{
              opacity: showImage ? "0.4" : "0",
              display: location.pathname === "/gallery" ? "block" : "none",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "opacity .3s ease",
            }}
          >
            <img
              src={images.Cloud}
              alt="click on me"
              style={{ width: "200px", height: "100px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <div style={header_style.buttonContainerStyles}>
        <button style={header_style.buttonStyles} onClick={openPopup}>
          Путешествовать
        </button>
      </div>
      <div style={header_style.popupStyles}>
        <div style={header_style.popupContentStyles}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faTimes} onClick={closePopup} />
          </div>
          <p style={{ fontSize: "1.5rem" }}>
            Мы можем помочь подобрать Вам готовый тур или создать авторский тур
            по Вашим пожеланиям:
          </p>
          <form style={{ margin: "40px 0" }}>
            <div style={header_style.inputContainer}>
              <input
                placeholder="Город вылета*"
                style={header_style.inputStyle}
              ></input>
              <div style={{ ...header_style.inputStyle, cursor: "pointer" }}>
                Количество путешественников*
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div style={{ ...header_style.inputStyle, cursor: "pointer" }}>
                Дата вылета
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  textAlign: "left",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <div>Сезон:</div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                  >
                    <FontAwesomeIcon icon={faSquare} />
                    Зима
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                  >
                    <FontAwesomeIcon icon={faSquare} />
                    Весна
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                  >
                    <FontAwesomeIcon icon={faSquare} />
                    Лето
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                    }}
                  >
                    <FontAwesomeIcon icon={faSquare} />
                    Осень
                  </div>
                </div>
              </div>
              <input
                placeholder="Количество ночей*"
                style={header_style.inputStyle}
              ></input>
              <input
                placeholder="Бюджет на путешествие"
                style={header_style.inputStyle}
              ></input>
            </div>
            <button style={header_style.buttonStyles}>Путешествовать</button>
          </form>
          <p>Когда поехать на Алтай дешевле?</p>
          <p style={{ textAlign: "justify" }}>
            Май и сентябрь - самое время для бюджетного путешествия на Алтай.
            Потому что весной на Алтае сезон цветения моральника (своей красотой
            он чем-то напоминает сакуру), а сентябрь - это начало золотой осени.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
