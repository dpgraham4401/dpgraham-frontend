import React from "react";
import { Navbar, Offcanvas, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

interface props {
  expand: string;
  showMenu: boolean;
  toggleMenu: () => void;
}

function NavMenu({ expand, showMenu, toggleMenu }: props) {
  return (
    <Navbar.Offcanvas
      className="bg-dark"
      id={`offcanvasNavbar-expand-${expand}`}
      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
      placement="end"
      show={showMenu}
      onEscapeKeyDown={toggleMenu}
    >
      <Offcanvas.Header
        className="bg-secondary"
        closeButton
        onHide={toggleMenu}
      >
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
          <h1 className={"text-white m-0"}>DPGraham</h1>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link
            to="/"
            className="text-decoration-none m-3 dpg-dark-link h3"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-decoration-none m-3 dpg-dark-link h3"
            onClick={toggleMenu}
          >
            Blog
          </Link>
        </Nav>
      </Offcanvas.Body>
      <Container className="d-lg-none">
        <p className="text-white">
          {" Found a problem? "}
          <a
            href="https://github.com/dpgraham-com/dpgraham-client/issues/new"
            target="_blank"
            className="dpg-dark-link"
            rel="noreferrer"
          >
            {"Report an Issue here "}
            <FontAwesomeIcon icon={faExternalLink} />
          </a>
        </p>
      </Container>
    </Navbar.Offcanvas>
  );
}

export default NavMenu;
