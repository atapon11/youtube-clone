import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
            boderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Videos videos={videos} />
    </Stack>
  );
};

export default Feed;
