import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ options, sortItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    sortItem(option);
  };

  const cardsHeader = {
    display: "flex",
    alignItems: "center",
  };

  const sortTitle = {
    marginRight: "1rem",
    fontFamily: "Title",
    fontSize: "1.2rem",
  };

  const sortHeader = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  };

  const dropdownContainer = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "#0D303D",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginTop: "0.25rem",
  };

  const dropdownOption = {
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    fontSize: ".8rem",
  };

  const buttonStyle = {
    backgroundColor: "#0D303D",
    color: "#c0dbe7",
    cursor: "pointer",
    border: "1px solid #c0dbe7",
    borderRadius: "6px",
    padding: "5px 10px",
    fontFamily: "TextRegular",
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  };

  return (
    <div style={cardsHeader}>
      <div style={sortTitle}>Сортировать:</div>
      <div style={sortHeader}>
        <button style={buttonStyle} onClick={toggleDropdown}>
          {selectedOption}
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {isOpen && (
          <div style={dropdownContainer}>
            {options.map((option) => (
              <div
                key={option}
                style={{
                  ...dropdownOption,
                  backgroundColor:
                    option === selectedOption ? "#c0dbe7" : "transparent",
                  color: option === selectedOption ? "#0D303D" : "#c0dbe7",
                }}
                onClick={() => selectOption(option)}
              >
                {option}
                {option === selectedOption && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
