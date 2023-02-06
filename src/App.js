import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Feed,VideoDetail,ChannelDetail,SearchFeed } from "./pages";
import { NavBar } from "./components";


const App = () => {
    return (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/Video/:videoId" element={<VideoDetail />} />
        <Route path="/Channel/:channelId" element={<ChannelDetail />} />
        <Route path="/Search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  );
};

export default App;
