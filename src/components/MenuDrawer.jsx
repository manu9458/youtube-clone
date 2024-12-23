import * as React from "react";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import logo from "../assets/logo.png";
import { categories } from "../utils/constants";

export default function MenuDrawer({
  selectedCategory,
  setselectedCategory,
  toggleDrawer,
  openDrawer,
}) {
  const list = (
    <Box
      sx={{ width: 250, overflow: "auto" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <AppBar position="sticky">
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" width={45}></img>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, margin: 1 }}
          >
            YouTube
          </Typography>
        </Toolbar>
      </AppBar>
      <Divider />
      <List>
        {categories.map((category) => (
          <ListItem
            key={category}
            disablePadding
            sx={{
              backgroundColor: category.name === selectedCategory && "#CD201F",
            }}
          >
            <ListItemButton onClick={() => setselectedCategory(category.name)}>
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={category.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Toolbar>
        Copyright in India As of 2024,
        <br /> All rights reserved.
      </Toolbar>
    </Box>
  );

  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onBlur={toggleDrawer}
        onOpen={toggleDrawer}
        hideBackdrop
      >
        {list}
      </SwipeableDrawer>
    </>
  );
}
