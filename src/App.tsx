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

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       light: "#000000",
//       main: "#1fafa8",
//       dark: "#ffffff",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#000000",
//       main: "#af1f26",
//       dark: "#ffffff",
//       contrastText: "#000",
//     },
//   },
// });

function App() {
  return (
    <>
      <FallbackError>
        <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
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
          </Box>
          <Footer />
        </BrowserRouter>
      </FallbackError>
    </>
  );
}

export default App;
