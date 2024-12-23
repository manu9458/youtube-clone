import "../App.css";

import React, { useEffect, useState } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { fetchFromApi } from "../utils/fetchFromApi";
import MenuDrawer from "./MenuDrawer";
import Video from "./Video";

function Feed({ openDrawer, toggleDrawer }) {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setVideos([]);
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
        mt: { md: 8, xs: 6.5 },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          // borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          width: { sx: "auto", md: openDrawer ? 260 : "none" },
        }}
      ></Box>
      <MenuDrawer
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
      />

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" mb={2}>
          {selectedCategory}
          <span style={{ color: "red" }}> Videos</span>
        </Typography>
        <Video videos={videos}></Video>
      </Box>
    </Stack>
  );
}

export default Feed;
