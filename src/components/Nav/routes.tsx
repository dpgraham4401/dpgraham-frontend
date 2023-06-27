import { Feed, Home, Person } from "@mui/icons-material";
import React, { ReactElement } from "react";

interface Route {
  id: string;
  icon: ReactElement;
  text: string;
  url: string;
}

export const routes: Route[] = [
  {
    id: "home",
    icon: <Home />,
    text: "Home",
    url: "/",
  },
  {
    id: "articles",
    icon: <Feed />,
    text: "Articles",
    url: "/articles",
  },
  {
    id: "about",
    icon: <Person />,
    text: "About Me",
    url: "/about",
  },
];
