import React from "react";
import "./burger.css";
import MenuList from "./MenuList";
function MenuBurger() {
  return (
    <>
      <input id="burger" type="checkbox" />
      <label htmlFor="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav>
        <MenuList />
      </nav>
    </>
  );
}
export default MenuBurger;
