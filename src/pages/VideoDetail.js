import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";

import { Video, Loader } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { videoId } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
      (data) =>{
        console.log(data);
      setVideoDetail(data)
      }
    );
  }, [videoId]);
  if(!VideoDetail?.snippet)
  return <div>VideoDetail</div>;
};

export default VideoDetail;
