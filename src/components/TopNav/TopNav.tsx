import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBtn from "./NavBtn";
import NavMenu from "./NavMenu";
import { useState } from "react";

function TopNav() {
  // TopNav component holds state of off canvas Menu
  const [showMenu, setShowMenu] = useState<boolean>(false);
  // function to
  const toggleMenu = () => setShowMenu(!showMenu);
  const expand = "lg";
  return (
    <Container>
      <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand
            as={Link}
            className="bg-primary bg-gradient rounded-circle"
            to="/"
          >
            <img
              src="/rp_bg_trans.png"
              width={"120"}
              height={"100"}
              alt="DPGraham"
            />
          </Navbar.Brand>
          <NavBtn expand={expand} toggleNav={toggleMenu} />
          <NavMenu
            expand={expand}
            showMenu={showMenu}
            toggleMenu={toggleMenu}
          />
        </Container>
      </Navbar>
    </Container>
  );
}

export default TopNav;
