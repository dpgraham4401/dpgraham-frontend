import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface TopNavProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

function TopNav({ showMenu, setShowMenu }: TopNavProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src="/rp_bg_trans.png"
              width={"120"}
              height={"100"}
              alt="DPGraham"
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

  // return (
  //   <Container>
  //     <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
  //       <Container fluid>
  //         <Navbar.Brand
  //           as={Link}
  //           className="bg-primary bg-gradient rounded-circle"
  //           to="/"
  //         >
  //           <img
  //             src="/rp_bg_trans.png"
  //             width={"120"}
  //             height={"100"}
  //             alt="DPGraham"
  //           />
  //         </Navbar.Brand>
  //         <NavBtn expand={expand} toggleNav={toggleMenu} />
  //         <NavMenu
  //           expand={expand}
  //           showMenu={showMenu}
  //           toggleMenu={toggleMenu}
  //         />
  //       </Container>
  //     </Navbar>
  //   </Container>
  // );
}

export default TopNav;
