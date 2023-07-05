import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { FallbackError, DpgPageError } from "components/DpgError";
import { NavDrawer } from "components/Nav/NavDrawer";
import { MarkdownArticle } from "features/Article";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "features/Home";
import ArticleList from "features/ArticleList";
import { AppHeader } from "components/Nav";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#333333",
    },
    text: {
      primary: "#000000",
    },
  },
});

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <FallbackError>
          <BrowserRouter>
            <AppHeader showMenu={showMenu} setShowMenu={setShowMenu} />
            <NavDrawer setShowMenu={setShowMenu} showMenu={showMenu} />
            {/* padding around the main content */}
            <Box p={4}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<ArticleList />} />
                <Route path="/blog/:id" element={<MarkdownArticle />} />
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
