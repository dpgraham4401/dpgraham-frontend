import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";

interface props {
  expand: string;
  toggleNav: () => void;
}

function NavBtn({ expand, toggleNav }: props) {
  return (
    <Navbar.Toggle
      className="border-0 shadow-none"
      aria-controls={`offcanvasNavbar-expand-${expand}`}
      onClick={toggleNav}
    >
      <div className="d-flex dpg-node-size-50 align-items-center justify-content-center">
        <div className="bg-primary rounded-circle w-100 h-100 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon className="h2 m-0" icon={faBars} />
        </div>
      </div>
    </Navbar.Toggle>
  );
}

export default NavBtn;
