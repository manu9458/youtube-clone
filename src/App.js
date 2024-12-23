import "./App.css";

import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// import { Box, ThemeProvider, createTheme } from "@mui/material";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";

const lightTheme = createTheme({});
const darkTheme = createTheme({
  palette: { mode: "dark" },
});

function App() {
  const [darkMode, SetDarkMode] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChangeTheme = () => {
    SetDarkMode(!darkMode);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar
          handleChangeTheme={handleChangeTheme}
          darkMode={darkMode}
          toggleDrawer={toggleDrawer}
        ></NavBar>
        <Box color="inherit">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Feed
                  toggleDrawer={toggleDrawer}
                  openDrawer={openDrawer}
                ></Feed>
              }
            ></Route>
            <Route
              path="/video/:id"
              element={<VideoDetail></VideoDetail>}
            ></Route>
            <Route
              path="/channel/:id"
              element={<ChannelDetail></ChannelDetail>}
            ></Route>
            <Route
              path="/search/:searchTerm"
              element={<SearchFeed></SearchFeed>}
            ></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
