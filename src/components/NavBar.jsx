import React, { useState } from "react";

import { Link } from "react-router-dom";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

function NavBar(props) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>Sign In</MenuItem>
      <MenuItem
        size="large"
        color="inherit"
        alignItems="center"
        onClick={props.handleChangeTheme}
      >
        {props.darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            position: "fixed",
          }}
        >
          <Toolbar>
            <IconButton onClick={props.toggleDrawer}>
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
            <Box sx={{ flexGrow: 1 }} />
            <SearchBar />
            <IconButton
              color="inherit"
              sx={{
                backgroundColor: "inherit",
                borderRadius: "24px",
                ml: 2,
              }}
            >
              <MicIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton color="inherit" onClick={props.handleChangeTheme}>
                {props.darkMode ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <Button color="inherit">Sign In</Button>
              <IconButton color="inherit">
                <MoreVertIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                color="inherit"
                edge="end"
                onClick={handleMobileMenuOpen}
                aria-controls="mobileMenuId"
              >
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
      </Box>
    </div>
  );
}

export default NavBar;
