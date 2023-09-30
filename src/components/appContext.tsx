import { createContext, Dispatch, SetStateAction } from "react";

interface AppContextType {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType>({
  showMenu: false,
  setShowMenu: () => {},
  darkMode: false,
  setDarkMode: () => {},
});
