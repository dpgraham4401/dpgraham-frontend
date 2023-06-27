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

interface NavDrawerProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export function NavDrawer({ showMenu, setShowMenu }: NavDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={showMenu}
      onClose={() => setShowMenu(false)}
    >
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <p>hello</p>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
