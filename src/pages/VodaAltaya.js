import React, { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import * as images from "../images";
import Section from "../components/Section";
import BigDropdown from "../components/BigDropdown";
import Container from "../components/Container";
import Footer from "../components/Footer";
import general_styles from "../styles/styles";

const VodaAltaya = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const anchorRef = useRef(null);

  const handleDownload = () => {
    const link = anchorRef.current;
    link.href = `${process.env.PUBLIC_URL}/spisok.doc`;
    link.download = "document.pdf";
    link.click();
  };

  const dropdownItems = [
    {
      title: "Горные озёра, долины, перевалы",
      content:
        "Разница в том, что если речь идёт говорить о не строго ограниченном городе, регионе, то нужно писать 'на' - на Алтае, а вот если значение в ограниченном пространстве, тогда пишем 'в', правильно в Алтайском крае.",
    },
    {
      title: "Сплав по реке Катунь. Село мастеров. Горная пасека.",
      content:
        "Алтайский / Южно-алтайский язык (алт. Алтай тил) - один из горно-алтайских языков, родной, общенациональный и литературный язык алтайцев. Государственный язык Республики Алтай. До 1948 года назывался Ойротским.",
    },
    {
      title: "Экскурсия на теплоходе 'Пионер Алтая' по Телецкому озеру",
      content:
        "«Алтай» от монгольского Алттай – «золотоносный». Золото на Алтае действительно добывали с глубокой древности. В китайских источниках горы часто называли «Цзиньшань» - «Золотые горы».",
    },
  ];

  const logoContainer = {
    width: "100%",
    height: "100vh",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const titleStyle = {
    fontFamily: "Title",
    fontSize: "8rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    letterSpacing: "5px",
    margin: 0,
  };

  const backButtonStyle = {
    position: "absolute",
    backgroundColor: "rgba(13, 48, 61, 0.8)",
    padding: "15px",
    margin: "2rem 0 0 2rem",
    color: "#c0dbe7",
    border: "none",
    borderRadius: "6px",
    fontFamily: "TextRegular",
    fontSize: "1rem",
    cursor: "pointer",
  };

  const descriptionStyle = {
    maxWidth: "600px",
    fontFamily: "TextRegular",
    padding: "4rem",
    fontSize: "1.2rem",
    textAlign: "justify",
  };

  const buyTourStyle = {
    backgroundColor: "#c0dbe7",
    borderRadius: "12px",
    border: "none",
    textAlign: "center",
    color: "#0D303D",
    fontFamily: "TextRegular",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(-25%, -50%)",
    padding: "2rem",
    display: "grid",
    gap: "1rem",
  };

  const bonusTitle = {
    fontFamily: "TextRegular",
    fontSize: "1.5rem",
  };

  const inputStyle = {
    width: "400px",
    padding: "1rem",
    borderRadius: "6px",
    border: "none",
    fontFamily: "TextRegular",
    marginBottom: "1rem",
    backgroundColor: "#c0dbe7",
    color: "#0D303D",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: ".5rem 1rem",
    borderRadius: "6px",
    border: "1px solid #c0dbe7",
    cursor: "pointer",
    backgroundColor: "#0D303D",
    color: "#c0dbe7",
    fontFamily: "TextRegular",
    fontSize: "1rem",
    width: "100%",
    margin: "4rem 0 0",
  };

  const formStyle = {
    padding: "4rem",
    background: "#2d5470",
    borderRadius: "12px",
    fontFamily: "TextRegular",
    textAlign: "center",
    width: "500px",
    margin: "10rem auto",
  };

  return (
    <div>
      <div style={logoContainer}>
        <img src={images.TourLogo} alt="VodaAltaya" style={imageStyle} />
        <h1 style={titleStyle}>Вода Алтая</h1>
        <button
          onClick={goBack}
          style={{ ...backButtonStyle, top: 0, left: 0 }}
        >
          Назад
        </button>
      </div>
      <Slide direction="up" triggerOnce cascade>
        <div style={{ position: "relative" }}>
          <p style={descriptionStyle}>
            На территории Горного Алтая расположено более 7 тысяч озёр,
            потрясающих своей красотой и индивидуальностью. Многие из них входят
            в состав заповедной зоны "Золотые горы Алтая", которая находится под
            патронатом ЮНЕСКО.
          </p>
          <div style={buyTourStyle}>
            <div style={{ fontSize: "1.4rem" }}>от 100 000 рублей</div>
            <div style={{ fontSize: ".9rem", fontFamily: "TextLight" }}>
              12 дней 11 ночей
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
                fontSize: ".9rem",
                fontFamily: "TextLight",
              }}
            >
              <span>Всё включено</span>
              <span>От 8 лет</span>
              <span>10-15 человек</span>
            </div>
            <button
              style={{ ...general_styles.buttonStyles, letterSpacing: 0 }}
            >
              Забронировать места
            </button>
            <div
              style={{
                display: "grid",
                gap: ".5rem",
                fontSize: "1.1rem",
                fontFamily: "TextLight",
              }}
            >
              <div>Ближайший тур</div>
              <div>07.09.2023-18.09.2023</div>
              <div style={{ fontSize: ".7rem" }}>Показать другие даты</div>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#0D303D",
                margin: "1rem 0",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                fontSize: "1.1rem",
              }}
            >
              <div style={{ display: "grid", gap: ".5rem" }}>
                <span>Подготовка</span>
                <span>Базовая</span>
              </div>
              <div style={{ display: "grid", gap: ".5rem" }}>
                <span>Проживание</span>
                <span>Комфорт</span>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <Section
        title={"Программа тура"}
        content={
          <div>
            <div style={{ position: "relative" }}>
              <BigDropdown
                items={dropdownItems}
                style={{ position: "relative" }}
              />
              <button
                onClick={handleDownload}
                style={{
                  ...backButtonStyle,
                  bottom: 0,
                  margin: "-1rem 0",
                  right: 0,
                  transform: "translate(0, 100%)",
                  backgroundColor: "rgba(192, 219, 231, 1)",
                  color: "#0D303D",
                }}
                ref={anchorRef}
              >
                Скачать список личных вещей
                <a ref={anchorRef} style={{ display: "none" }}>
                  Download PDF document
                </a>
              </button>
            </div>
            <Slide direction="up" triggerOnce>
              <div style={formStyle}>
                <span style={bonusTitle}>Мне необходима консультация гида</span>
                <form style={{ margin: "2rem" }}>
                  <input placeholder="Ваше имя*" style={inputStyle} />
                  <input
                    type="phone"
                    placeholder="Ваш телефон*"
                    style={inputStyle}
                  />
                  <button
                    style={{
                      ...buttonStyle,
                      marginTop: "1rem",
                      background: "transparent",
                      width: "50%",
                      marginBottom: "1rem",
                    }}
                  >
                    Перезвоните мне
                  </button>
                </form>
                <span style={{ fontSize: ".8rem", fontFamily: "TextLight" }}>
                  Нажимая кнопку, вы даете согласие на обработку персональных
                  данных
                </span>
              </div>
            </Slide>
          </div>
        }
      />
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default VodaAltaya;
