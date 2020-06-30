import React from "react";

import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const NavItems = (props) => {
  let login;
  if (props.isAuth) {
    login = (
      <React.Fragment>
        <NavItem link="/orders">Orders</NavItem>
        <NavItem link="/logout">Logout</NavItem>
      </React.Fragment>
    );
  } else {
    login = <NavItem link="/auth">Login</NavItem>;
  }
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/">Burger Builder</NavItem>

      {login}
    </ul>
  );
};

export default NavItems;
