import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function TopNav() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "secondary.main" }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
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
