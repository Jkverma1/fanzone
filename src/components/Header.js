import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [isNavOpen, setNavOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const toggleNavDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setNavOpen(open);
  };

  const toggleNotificationsDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setNotificationsOpen(open);
  };

  return (
    <>
      <AppBar
        style={{ background: "transparent", boxShadow: "none" }}
        position="static"
        color="default"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="avatar"
            onClick={toggleNavDrawer(true)}
          >
            <Avatar src="" />
          </IconButton>
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              visibility: isDesktop ? "visible" : "hidden",
            }}
          ></div>
          <IconButton color="inherit" onClick={toggleNotificationsDrawer(true)}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isNavOpen} onClose={toggleNavDrawer(false)}>
        <div style={{ textAlign: "right" }}>
          <IconButton onClick={toggleNavDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List style={{ width: 250 }}>
          <ListItem disablePadding>
            <Button component={RouterLink} to="/nav-item-1" fullWidth>
              Nav Item 1
            </Button>
          </ListItem>
          <ListItem disablePadding>
            <Button component={RouterLink} to="/nav-item-2" fullWidth>
              Nav Item 2
            </Button>
          </ListItem>
          <ListItem disablePadding>
            <Button component={RouterLink} to="/nav-item-3" fullWidth>
              Nav Item 3
            </Button>
          </ListItem>
          <ListItem disablePadding>
            <Button component={RouterLink} to="/nav-item-4" fullWidth>
              Nav Item 4
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <Drawer
        anchor="right"
        open={isNotificationsOpen}
        onClose={toggleNotificationsDrawer(false)}
      >
        <div>
          <IconButton onClick={toggleNotificationsDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List style={{ width: 250 }}>
          <ListItem button>
            <ListItemText primary="Notification 1" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
