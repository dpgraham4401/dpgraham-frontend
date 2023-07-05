import { createTheme } from "@mui/material";

export const PRIMARY_COLOR = "#2db4ad";
export const SECONDARY_COLOR = "#bd1920";

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
        main: SECONDARY_COLOR,
      },
    },
    components: {
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: SECONDARY_COLOR,
          },
        },
      },
    },
  });
};
