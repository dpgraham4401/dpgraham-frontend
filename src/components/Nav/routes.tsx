import { Feed, Home, Person, WorkHistory } from "@mui/icons-material";
import React, { ReactElement } from "react";

interface Route {
  id: string;
  icon: ReactElement;
  text: string;
  url: string;
  description?: string;
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
    description: "Ramblings for consumption",
  },
  {
    id: "about",
    icon: <Person />,
    text: "About Me",
    url: "/about",
    description: "My background and personal interests",
  },
  {
    id: "resume",
    icon: <WorkHistory />,
    text: "Resume",
    url: "/resume",
    description: "View or download my resume",
  },
];
