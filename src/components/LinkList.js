import React from "react";
import { Link } from "react-router-dom";

const LinkList = ({ links, ways }) => {
  const listStyle = {
    listStyle: "none",
    textAlign: "left",
    display: "grid",
    gap: "1rem",
    margin: 0,
    padding: 0,
  };

  const listItemStyle = {
    fontFamily: "TextRegular",
    fontSize: ".9rem",
    textDecoration: "none",
    color: "#c0dbe7",
  };

  return (
    <ul style={listStyle}>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={ways[index]} style={listItemStyle}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
