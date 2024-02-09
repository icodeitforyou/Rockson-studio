import React, { useState } from "react";

function DynamicMenu() {
  const [menuItems] = useState([
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Contact", link: "/contact" },
  ]);
  return (
    <ul className="header_nav_grid">
      {menuItems.map((item) => (
        <li className="header_nav_items" key={item.id}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default DynamicMenu;
