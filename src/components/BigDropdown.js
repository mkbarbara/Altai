import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Rotate } from "react-reveal";

const BigDropdown = ({ title, items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleItemClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const bigDropdown = {
    textAlign: "left",
    flex: 1,
  };

  const dropdownTitle = {
    fontFamily: "Title",
    fontSize: "2rem",
    letterSpacing: "3px",
    margin: "0 0 4rem",
  };

  const dropdownItem = {
    margin: "1rem 0",
    cursor: "pointer",
  };

  const itemTitle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "TextRegular",
    fontSize: "1.2rem",
    gap: "4rem",
    padding: "1rem 0",
  };

  const itemContent = {
    transition: ".5s ease",
    fontSize: "1rem",
    fontFamily: "TextLight",
  };

  const line = {
    width: "100%",
    height: "1px",
    backgroundColor: "#c0dbe7",
  };

  return (
    <div style={bigDropdown}>
      <h3 style={dropdownTitle}>{title}</h3>
      <Rotate bottom left cascade>
        <div>
          {items.map((item, index) => (
            <div key={index} style={dropdownItem}>
              <div style={line}></div>
              <div style={itemTitle} onClick={() => handleItemClick(index)}>
                {item.title}
                <FontAwesomeIcon
                  icon={expandedIndex === index ? faChevronUp : faChevronDown}
                />
              </div>
              <div style={{...itemContent, opacity: expandedIndex === index ? 1 : 0, height: expandedIndex === index ? 'auto' : 0, padding: expandedIndex === index ? "1rem 0" : 0}}>{item.content}</div>
              <div style={line}></div>
            </div>
          ))}
        </div>
      </Rotate>
    </div>
  );
};

export default BigDropdown;
