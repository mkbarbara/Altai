import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import Header from "../components/Header";
import Slide from "react-reveal/Slide";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import TourCard from "../components/TourCard";
import Data from "../Data";
import BlocksWithLines from "../components/BlocksWithLines";
import Dropdown from "../components/Dropdown";
import * as images from "../images";

const Tours = () => {
  const season = ["Лето", "Осень", "Зима", "Весна"];
  const type = ["Индивидуальный", "Групповой", "Семейный"];
  const kind = [
    "Джип-туры",
    "Пеший",
    "Водный",
    "Горный",
    "Велотур",
    "Обзорный",
    "Комбинированный",
    "Корпоративный",
  ];
  const level = ["Базовый", "Средний", "Повышенный", "Сложный"];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [item, setItem] = useState(Data);
  const [activeItems, setActiveItems] = useState([]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [totalPages, setTotalPages] = useState(
    Math.ceil(Data.length / itemsPerPage)
  );

  const showNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const showPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const itemsToShow = item.slice(startIndex, endIndex);

  const [currentSortingOption, setCurrentSortingOption] =
    useState("По номеру тура");

  const filterItem = (activeItems) => {
    let newItem;
    if (activeItems.length === 0) {
      newItem = Data;
    } else {
      newItem = Data.filter((newVal) =>
        activeItems.every((tag) => newVal.tags.includes(tag))
      );
    }

    setItem(newItem);
    setCurrentPage(1);

    const newTotalPages = Math.ceil(newItem.length / itemsPerPage);
    setTotalPages(newTotalPages);
  };

  useEffect(() => {
    sortItem(currentSortingOption);
  });

  const toggleActiveItem = (item) => {
    if (activeItems.includes(item)) {
      setActiveItems(activeItems.filter((activeItem) => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  const generatePageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          style={{
            ...pageStyle,
            color: currentPage === i ? "#4e8dba" : "#2d5470",
          }}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const sortItem = (option) => {
    let sortedData = [...item];

    if (option === "По популярности") {
      sortedData.sort((a, b) => b.popularity - a.popularity);
    } else if (option === "Сначала дешёвые") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (option === "Сначала дорогие") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (option === "По номеру тура") {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    }

    setItem(sortedData);
    setCurrentPage(1);
    setCurrentSortingOption(option);
  };

  const texts = [
    "При покупке двух туров предоставляем скидку 30% на один из них.",
    "При бронировании тура за полгода и оплате половины стоимости фиксируем для Вас стоимость тура",
    "При покупке индивидуального тура предоставляем скидку на любой групповой тур",
  ];

  const [openBonus, setOpenBonus] = useState(false);

  const openBonusMenu = () => {
    setOpenBonus(true);
    document.body.style.overflow = "hidden";
  };

  const closeBonusMenu = () => {
    setOpenBonus(false);
    document.body.style.overflow = "auto";
  };

  const cardsContainer = {
    marginLeft: "80px",
  };

  const mainContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    marginBottom: "8rem",
  };

  const filterHeader = {
    fontFamily: "Title",
    textAlign: "left",
    marginTop: 0,
  };

  const line = {
    width: "1px",
    height: "100%",
    backgroundColor: "#c0dbe7",
    marginLeft: "2rem",
  };

  const filterDivider = {
    display: "flex",
    justifyContent: "space-between",
  };

  const cardsHeader = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    fontFamily: "TextRegular",
    marginBottom: "2rem",
  };

  const cards = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "4rem",
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

  const pagesNav = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "2rem",
  };

  const pageStyle = {
    backgroundColor: "#0D303D",
    fontFamily: "TextRegular",
    color: "#2d5470",
    fontSize: "1.2rem",
    border: "none",
    cursor: "pointer",
    padding: 0,
  };

  const pageArrow = {
    fontSize: ".8rem",
    color: "#4e8dba",
  };

  const pages = {
    display: "flex",
    gap: "1rem",
  };

  const fullScreenStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  };

  const fullScreenOverlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    background: "#2d5470",
    borderRadius: "6px",
    zIndex: 1001,
    fontFamily: "TextRegular",
    textAlign: "center",
    width: "500px",
  };

  const closeIconStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
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

  return (
    <div>
      <Container>
        <Header />
      </Container>
      <Section
        content={
          <div style={mainContainer}>
            <div style={filterDivider}>
              <Slide bottom cascade>
                <div style={{ width: "100%" }}>
                  <h2 style={filterHeader}>Фильтр</h2>
                  <Filter
                    title={"Сезон"}
                    filterItem={filterItem}
                    menuItems={season}
                    toggleActiveItem={toggleActiveItem}
                    activeItems={activeItems}
                  />
                  <Filter
                    title={"Тип тура"}
                    filterItem={filterItem}
                    menuItems={type}
                    toggleActiveItem={toggleActiveItem}
                    activeItems={activeItems}
                  />
                  <Filter
                    title={"Вид тура"}
                    filterItem={filterItem}
                    menuItems={kind}
                    toggleActiveItem={toggleActiveItem}
                    activeItems={activeItems}
                  />
                  <Filter
                    title={"Уровень сложности"}
                    filterItem={filterItem}
                    menuItems={level}
                    toggleActiveItem={toggleActiveItem}
                    activeItems={activeItems}
                  />
                  <button
                    style={{ ...buttonStyle, margin: 0 }}
                    onClick={() => {
                      setItem(Data);
                      setActiveItems([]);
                      setTotalPages(Math.ceil(Data.length / itemsPerPage));
                    }}
                  >
                    Сбросить все
                  </button>
                </div>
              </Slide>
              <div style={line}></div>
            </div>
            <div style={cardsContainer}>
              <div style={cardsHeader}>
                <Dropdown
                  options={[
                    "По номеру тура",
                    "По популярности",
                    "Сначала дешёвые",
                    "Сначала дорогие",
                  ]}
                  sortItem={sortItem}
                ></Dropdown>
              </div>
              <div>
                {itemsToShow.length > 0 ? (
                  <div style={cards}>
                    <TourCard items={itemsToShow} />
                  </div>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      justifyItems: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={images.Cloud2}
                      alt="Nothing Found"
                      style={{
                        width: "400px",
                        animation: "moveUpDown 5s ease-in-out infinite",
                      }}
                    ></img>
                    <span
                      style={{
                        color: "#c0dbe7",
                        fontSize: "1.2rem",
                        fontFamily: "TextRegular",
                      }}
                    >
                      К сожалению, не нашлось туров, подходящих под Ваши
                      параметры поиска.{" "}
                      <p>
                        Вы можете изменить параметры поиска или связаться с нами
                        по электронной почте: altai_tours@yandex.ru
                      </p>
                    </span>
                  </div>
                )}
              </div>
              {totalPages > 0 && (
                <div style={pagesNav}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ ...pageStyle, ...pageArrow }}
                    onClick={showPrev}
                  />
                  <div style={pages}>{generatePageButtons()}</div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ ...pageStyle, ...pageArrow }}
                    onClick={showNext}
                  />
                </div>
              )}
            </div>
          </div>
        }
      ></Section>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            fontFamily: "TextRegular",
            fontSize: "1.2rem",
          }}
        >
          <span>1+1</span>
          <span>Планируй</span>
          <span>Больше</span>
        </div>
        <BlocksWithLines texts={texts} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            fontFamily: "TextRegular",
            fontSize: "1.2rem",
            marginBottom: "8rem",
          }}
        >
          <div>
            <button
              style={{ ...buttonStyle, width: "50%", marginTop: "1rem" }}
              onClick={openBonusMenu}
            >
              Беру!
            </button>
          </div>
          <div>
            <button
              style={{ ...buttonStyle, width: "50%", marginTop: "1rem" }}
              onClick={openBonusMenu}
            >
              Беру!
            </button>
          </div>
          <div>
            <button
              style={{ ...buttonStyle, width: "50%", marginTop: "1rem" }}
              onClick={openBonusMenu}
            >
              Беру!
            </button>
          </div>
        </div>
      </Container>
      <Container>
        <Footer />
      </Container>
      {openBonus && (
        <div style={fullScreenStyle}>
          <div style={fullScreenOverlayStyle}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={closeBonusMenu}
              style={closeIconStyle}
            />
            <div>
              <span style={bonusTitle}>
                Чтобы получить бонус, необходимо оформить заявку:
              </span>
              <form style={{ margin: "2rem" }}>
                <input placeholder="Ваше имя*" style={inputStyle} />
                <input
                  type="phone"
                  placeholder="Ваш телефон*"
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Ваш адрес электронной почты*"
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
                  Беру бонус!
                </button>
              </form>
              <span style={{ fontSize: ".8rem", fontFamily: "TextLight" }}>
                Нажимая кнопку, вы даете согласие на обработку персональных
                данных
              </span>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Tours;
