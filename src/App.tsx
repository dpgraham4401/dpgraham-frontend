import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { AppContext } from "components/appContext";
import { customTheme } from "components/customTheme";
import { DpgPageError, FallbackError } from "components/DpgError";
import { AppHeader } from "components/Nav";
import { NavDrawer } from "components/Nav/NavDrawer";
import { AboutMe } from "features/AboutMe";
import { Articles } from "features/Articles";
import { Home } from "features/Home";
import { Resume } from "features/Resume/Resume";
import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const prefersDarkMode: boolean = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );
  const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode);

  const theme = useMemo(() => customTheme(darkMode), [darkMode]);

  return (
    <>
      <AppContext.Provider value={{ showMenu, darkMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <FallbackError>
            <BrowserRouter>
              <AppHeader
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
              <NavDrawer setShowMenu={setShowMenu} showMenu={showMenu} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles/*" element={<Articles />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route
                  path="*"
                  element={
                    <DpgPageError statusCode={404} message={"page not found"} />
                  }
                />
              </Routes>
              {/*</Box>*/}
            </BrowserRouter>
          </FallbackError>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
