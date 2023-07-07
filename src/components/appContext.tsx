import { createContext } from "react";

interface AppContextType {
  showMenu: boolean;
  darkMode: boolean;
}

export const AppContext = createContext<AppContextType>({
  showMenu: false,
  darkMode: false,
});
