import { createTheme } from "@mui/material";

export const PRIMARY_COLOR = "#2db4ad";
export const SECONDARY_COLOR_DARK = "#f75e5f";
export const SECONDARY_COLOR_LIGHT = "#6b0009";

export const customTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#333333" : "#dddddd",
      },
      primary: {
        main: PRIMARY_COLOR,
      },
      secondary: {
        main: SECONDARY_COLOR_DARK,
      },
    },
    components: {
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: darkMode ? SECONDARY_COLOR_DARK : SECONDARY_COLOR_LIGHT,
          },
        },
      },
    },
  });
};
