// Menu.jsx

import React from "react";

const Menu = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
