import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Slide from "react-reveal/Slide";

const Filter = ({
  title,
  filterItem,
  menuItems,
  toggleActiveItem,
  activeItems,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Styling

  const filterHeader = {
    textAlign: "left",
    fontFamily: "TextLight",
    fontSize: ".8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    margin: "2rem 0",
    gap: "1rem",
  };

  const filterText = {
    margin: 0,
  };

  const optionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: ".5rem",
    fontFamily: "TextLight",
    cursor: "pointer",
    margin: ".5rem 0",
  };

  const optionCheckbox = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div>
      <Slide bottom>
        <div style={filterHeader} onClick={toggleExpand}>
          <h2 style={filterText}>{title}</h2>
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
        </div>
      </Slide>
      {isExpanded ? (
        <div style={{ marginBottom: "2rem" }}>
          {menuItems.map((Val, id) => {
            return (
              <div
                key={id}
                style={optionStyle}
                onClick={() => {
                  toggleActiveItem(Val);
                  const updatedActiveItems = activeItems.includes(Val)
                    ? activeItems.filter((item) => item !== Val)
                    : [...activeItems, Val];
                  filterItem(updatedActiveItems);
                }}
              >
                <div style={optionCheckbox}>
                  <FontAwesomeIcon
                    icon={activeItems.includes(Val) ? faCheckSquare : faSquare}
                  />
                </div>
                <div>{Val}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filter;
