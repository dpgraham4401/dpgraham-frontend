import {
  AppBar,
  Box,
  Button,
  createTheme,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "features/Home";
import Article from "features/Article";
import BlogHome from "features/BlogHome";
import TopNav from "components/TopNav";
import Footer from "components/Footer";
import FallbackError from "components/FallbackError";
import DpgError from "components/DpgError";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <FallbackError>
        <BrowserRouter>
          <ThemeProvider theme={darkTheme}>
            <main className="bg-dark flex-fill py-1">
              <TopNav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogHome />} />
                <Route path="/blog/:id" element={<Article />} />
                <Route
                  path="*"
                  element={
                    <DpgError statusCode={404} message={"page not found"} />
                  }
                />
              </Routes>
            </main>
          </ThemeProvider>
          <Footer />
        </BrowserRouter>
      </FallbackError>
    </>
  );
}

export default App;
