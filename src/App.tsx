import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { customTheme } from "components/customTheme";
import { FallbackError, DpgPageError } from "components/DpgError";
import { NavDrawer } from "components/Nav/NavDrawer";
import { MarkdownArticle } from "features/Article";
import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "features/Home";
import ArticleList from "features/ArticleList";
import { AppHeader } from "components/Nav";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const prefersDarkMode: boolean = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );
  const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode);

  const theme = useMemo(() => customTheme(darkMode), [darkMode]);

  return (
    <>
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
            {/* padding around the main content */}
            <Box p={4}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<ArticleList />} />
                <Route path="/articles/:id" element={<MarkdownArticle />} />
                <Route
                  path="*"
                  element={
                    <DpgPageError statusCode={404} message={"page not found"} />
                  }
                />
              </Routes>
            </Box>
          </BrowserRouter>
        </FallbackError>
      </ThemeProvider>
    </>
  );
}

export default App;
