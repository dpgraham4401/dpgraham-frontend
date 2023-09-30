import { GitHub, OpenInNew } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { routes } from "components/Layout/routes";
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
        {routes.map((route) => (
          <ListItem key={route.id} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(route.url);
                setShowMenu(false);
              }}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText
                primary={route.text}
                secondary={route.description ? route.description : null}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List style={{ marginTop: "auto" }}>
        <ListItem disablePadding>
          <ListItemButton
            href="https://github.com/dpgraham4401/dpgraham-client/issues"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText
              primary={
                <div style={{ display: "flex", alignContent: "baseline" }}>
                  Report and Issue
                  <OpenInNew fontSize={"small"} sx={{ marginLeft: 1 }} />
                </div>
              }
              secondary="Found a bug? Give us your feedback"
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
