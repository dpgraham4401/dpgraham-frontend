import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  let iconBG = "#2db4ad";
  if (!darkMode) {
    iconBG = "#282828";
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 1 }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            aria-label="home"
            name="home"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
            style={{ backgroundColor: iconBG }}
          >
            <img
              src="/rp_bg_trans.png"
              width={"60"}
              height={"50"}
              alt="DPGraham"
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {/* Dark Mode button*/}
          <IconButton
            onClick={toggleDarkMode}
            color="inherit"
            aria-label="dark-mode-button"
            name="toggle-dark-mode"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {/* Toggle navigation button*/}
          <IconButton
            color="inherit"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="toggle-menu-button"
            name="toggle-menu"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
