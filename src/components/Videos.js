import React from "react";
import { Stack, Box } from "@mui/material";
import { Loader } from "./";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => {
        console.log(item);
        return(
        <Box key={index}>{item.id.videoId && <VideoCard video={item} />}</Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
