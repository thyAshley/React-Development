import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [showMenu, setShowMenu] = useState(true);
  let menu = (
    <>
      <div
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-10"
        onClick={() => setShowMenu(false)}
      ></div>
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-10 shadow">
        This is the Menu
      </div>
    </>
  );
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon onClick={() => setShowMenu(!showMenu)} icon={faBars} />
      </span>
      {showMenu && menu}
    </nav>
  );
}

export default Navigation;
