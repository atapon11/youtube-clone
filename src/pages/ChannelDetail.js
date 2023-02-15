import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //ดึงลิ้ง
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "../components/";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { channelId } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) => {
      //console.log();
      setChannelDetail(data.items[0]); //0คือตัวเลขของ index
    });

    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => {
        console.log(data);
        setVideos(data.items);
      }
    );
  }, [channelId]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(247,247,247,1) 0%, rgba(1,255,0,1) 17%, rgba(9,255,0,1) 38%, rgba(0,120,144,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;

