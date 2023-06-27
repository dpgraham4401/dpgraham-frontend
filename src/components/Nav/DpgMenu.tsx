import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import MenuIcon from "@mui/icons-material/Menu";

interface TopNavProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export function DpgMenu({ showMenu, setShowMenu }: TopNavProps) {
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
            <MenuIcon fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
