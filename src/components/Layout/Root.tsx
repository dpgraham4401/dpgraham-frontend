import { AppContext } from "components/appContext";
import { AppHeader } from "./AppHeader";
import { NavDrawer } from "./NavDrawer";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

export function Root() {
  const { showMenu, setShowMenu, darkMode, setDarkMode } =
    useContext(AppContext);
  return (
    <>
      <AppHeader
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <NavDrawer setShowMenu={setShowMenu} showMenu={showMenu} />
      <Outlet />
    </>
  );
}
