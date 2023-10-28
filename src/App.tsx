import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { AppContext } from "components/appContext";
import { customTheme } from "components/customTheme";
import { DpgPageError, FallbackError } from "components/DpgError";
import { Root } from "components/Layout";
import React, { useMemo, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        lazy: () => import("./features/Home"),
      },
      {
        path: "resume",
        lazy: () => import("./features/Resume"),
      },
      {
        path: "about",
        lazy: () => import("./features/AboutMe"),
      },
      {
        path: "*",
        element: <DpgPageError statusCode={404} message={"page not found"} />,
      },
    ],
  },
]);

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const prefersDarkMode: boolean = useMediaQuery(
    "(prefers-color-scheme: dark)",
  );
  const [darkMode, setDarkMode] = useState<boolean>(prefersDarkMode);

  const theme = useMemo(() => customTheme(darkMode), [darkMode]);

  return (
    <>
      <AppContext.Provider
        value={{ showMenu, setShowMenu, darkMode, setDarkMode }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <FallbackError>
            <RouterProvider router={router} />
          </FallbackError>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
