import { routes } from "components/Nav/routes";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface NavDrawerProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export function NavDrawer({ showMenu, setShowMenu }: NavDrawerProps) {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={showMenu}
      onClose={() => setShowMenu(false)}
      PaperProps={{
        sx: { width: 240 },
      }}
    >
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
