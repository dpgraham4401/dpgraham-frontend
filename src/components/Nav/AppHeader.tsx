import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface TopNavProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export function AppHeader({
  showMenu,
  setShowMenu,
  darkMode,
  setDarkMode,
}: TopNavProps) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src="/rp_bg_trans.png"
              width={"60"}
              height={"50"}
              alt="DPGraham"
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button color="inherit" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
