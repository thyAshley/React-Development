import React from "react";

import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const NavItems = (props) => {
  let login;
  if (props.isAuth) {
    login = <NavItem link="/logout">Logout</NavItem>;
  } else {
    login = <NavItem link="/auth">Login</NavItem>;
  }
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/">Burger Builder</NavItem>
      <NavItem link="/orders">Orders</NavItem>
      {login}
    </ul>
  );
};

export default NavItems;
