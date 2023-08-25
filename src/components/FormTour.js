import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import {
  faChevronDown,
  faChevronUp,
  faSquare,
  faSquareCheck,
  faPlus,
  faMinus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Нижний Новгород",
  "Красноярск",
  "Челябинск",
  "Самара",
  "Уфа",
  "Ростов-на-Дону",
  "Краснодар",
  "Омск",
  "Воронеж",
  "Пермь",
  "Горно-Алтайск",
  "Барнаул",
  "Хабаровск",
  "Ижевск",
  "Иркутск",
  "Сыктывкар",
  "Томск",
  "Калининград",
  "Сочи",
  "Владивосток",
];

const FormTour = ({ resetOnClose }) => {
  const [cityInput, setCityInput] = useState("");
  const [cityHints, setCityHints] = useState([]);
  const [travelersDropdownOpen, setTravelersDropdownOpen] = useState(false);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [nightsInput, setNightsInput] = useState("");
  const [budgetInput, setBudgetInput] = useState("");
  const [adults, setAdults] = useState(2); // Default number of adults
  const [children, setChildren] = useState(0); // Default number of children

  const handleCityInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setCityInput(inputValue);

    if (inputValue === "") {
      setCityHints([]);
    } else {
      const filteredHints = cities.filter((city) =>
        city.toLowerCase().startsWith(inputValue)
      );
      setCityHints(filteredHints.slice(0, 3));
    }
  };

  const handleCityHintClick = (city) => {
    setCityInput(city);
    setCityHints([]);
  };

  const handleTravelersDropdownClick = () => {
    setTravelersDropdownOpen(!travelersDropdownOpen);
  };

  const handleAdultsMinus = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleAdultsPlus = () => {
    if (adults < 20 && totalTravelers < 20) {
      setAdults(adults + 1);
    }
  };

  const handleChildrenMinus = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleChildrenPlus = () => {
    if (children < 20 && totalTravelers < 20) {
      setChildren(children + 1);
    }
  };

  const totalTravelers = adults + children;

  const handleSeasonCheckboxClick = (season) => {
    if (selectedSeasons.includes(season)) {
      setSelectedSeasons(selectedSeasons.filter((s) => s !== season));
    } else {
      setSelectedSeasons([...selectedSeasons, season]);
    }
  };

  const handleNightsInputChange = (e) => {
    setNightsInput(e.target.value);
  };

  const handleBudgetInputChange = (e) => {
    const value = e.target.value;
    setBudgetInput(value);
  };

  useEffect(() => {
    if (resetOnClose) {
      setCityInput("");
      setCityHints([]);
      setTravelersDropdownOpen(false);
      setSelectedSeasons([]);
      setStartDate();
      setNightsInput("");
      setBudgetInput("");
      setAdults(2);
      setChildren(0);
    }
  }, [resetOnClose]);

  const inputContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    margin: "40px 0",
    alignItems: "center",
  };

  const inputStyle = {
    backgroundColor: "transparent",
    color: "#0D303D",
    fontFamily: "TextRegular",
    fontSize: "1rem",
    height: "30px",
    borderRadius: "6px",
    padding: "10px",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const buttonStyles = {
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
  };

  const dropdownOptions = {
    position: "absolute",
    bottom: 0,
    left: 0,
    transform: "translate(0, 100%)",
    width: "100%",
    backgroundColor: "#c0dbe7",
    borderRadius: "6px",
    zIndex: 1,
    minHeight: "80px",
  };

  const dropdownOption = {
    padding: "5px 10px",
    margin: "5px 10px",
    cursor: "pointer",
    color: "#0D303D",
    textAlign: "left",
    border: "1px solid #0D303D",
    borderRadius: "6px",
    backgroundColor: "#c0dbe7",
  };

  const customInput = (
    <div
      style={{
        ...inputStyle,
        cursor: "pointer",
        backgroundColor: "#c0dbe7",
        position: "relative",
      }}
    >
      {startDate ? startDate.toLocaleDateString() : "Дата вылета*"}
    </div>
  );
  registerLocale("ru", ru);

  return (
    <div>
      <form style={{ margin: "40px 0" }}>
        <div style={inputContainer}>
          <div
            style={{
              position: "relative",
              backgroundColor: "#c0dbe7",
              borderRadius: "6px",
            }}
          >
            <input
              placeholder="Город вылета*"
              style={inputStyle}
              value={cityInput}
              onChange={handleCityInputChange}
            />
            <div>
              {cityHints.length > 0 && (
                <div style={dropdownOptions}>
                  {cityHints.map((hint) => (
                    <div
                      key={hint}
                      onClick={() => handleCityHintClick(hint)}
                      style={dropdownOption}
                    >
                      {hint}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              cursor: "pointer",
              position: "relative",
              backgroundColor: "#c0dbe7",
              borderRadius: "6px",
            }}
          >
            <div onClick={handleTravelersDropdownClick} style={inputStyle}>
              {`Количество путешественников: ${totalTravelers}`}
              <FontAwesomeIcon
                icon={travelersDropdownOpen ? faChevronUp : faChevronDown}
              />
            </div>
            {travelersDropdownOpen && (
              <div style={dropdownOptions}>
                <div
                  style={{
                    ...dropdownOption,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} onClick={handleAdultsMinus} />
                  <div>Взрослых: {adults}</div>
                  <FontAwesomeIcon icon={faPlus} onClick={handleAdultsPlus} />
                </div>
                <div
                  style={{
                    ...dropdownOption,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={handleChildrenMinus}
                  />
                  <div>Детей: {children}</div>
                  <FontAwesomeIcon icon={faPlus} onClick={handleChildrenPlus} />
                </div>
              </div>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <DatePicker
              renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={decreaseMonth}
                    style={{ cursor: "pointer", marginRight: "10px" }}
                  />
                  {date.toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                  })}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={increaseMonth}
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                  />
                </div>
              )}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={customInput}
              minDate={new Date()}
              locale="ru"
            />
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
              {["Зима", "Весна", "Лето", "Осень"].map((season) => (
                <div
                  key={season}
                  onClick={() => handleSeasonCheckboxClick(season)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon
                    icon={
                      selectedSeasons.includes(season)
                        ? faSquareCheck
                        : faSquare
                    }
                  />
                  {season}
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: "#c0dbe7", borderRadius: "6px" }}>
            <input
              placeholder="Количество ночей*"
              style={inputStyle}
              value={nightsInput}
              onChange={handleNightsInputChange}
            />
          </div>
          <div style={{ backgroundColor: "#c0dbe7", borderRadius: "6px" }}>
            <input
              placeholder="Бюджет на путешествие"
              style={inputStyle}
              value={budgetInput}
              onChange={handleBudgetInputChange}
            />
          </div>
        </div>
        <button style={buttonStyles}>Путешествовать</button>
      </form>
    </div>
  );
};

export default FormTour;
