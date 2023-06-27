import { Box } from "@mui/material";
import { NavDrawer } from "components/TopNav/NavDrawer";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "features/Home";
import Article from "features/Article";
import BlogHome from "features/BlogHome";
import TopNav from "components/TopNav";
import FallbackError from "components/FallbackError";
import DpgError from "components/DpgError";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <FallbackError>
        <BrowserRouter>
          <Box sx={{ flexGrow: 1 }}>
            <TopNav showMenu={showMenu} setShowMenu={setShowMenu} />
            <NavDrawer setShowMenu={setShowMenu} showMenu={showMenu} />
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
        </BrowserRouter>
      </FallbackError>
    </>
  );
}

export default App;
