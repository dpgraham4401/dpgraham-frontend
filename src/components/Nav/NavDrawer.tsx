import { routes } from "components/Nav/routes";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface NavDrawerProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

/**
 * NavDrawer is the app's off canvas navigation menu.
 * @param showMenu {boolean} - whether the menu is open or not
 * @param setShowMenu {Dispatch<SetStateAction<boolean>>} - function to set the state of the menu
 * @constructor
 */
export function NavDrawer({ showMenu, setShowMenu }: NavDrawerProps) {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={showMenu}
      onClose={() => setShowMenu(false)}
      PaperProps={{
        sx: {
          width: {
            xs: 240,
            sm: 300,
            md: 360,
          },
        },
      }}
    >
      {/* ToDo: add menu header*/}
      <Divider />
      <List>
        {routes.map((route, index) => (
          <ListItem key={route.id} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(route.url);
                setShowMenu(false);
              }}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
