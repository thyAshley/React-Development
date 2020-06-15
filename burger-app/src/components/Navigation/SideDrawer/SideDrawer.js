import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const SideDrawer = (props) => {
  return (
    <div>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
