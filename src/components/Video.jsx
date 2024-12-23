import { Box, Stack } from "@mui/material";

import ChannelCard from "./ChannelCard";
import Loader from "./Loader";
import VideoCard from "./VideoCard";

const Video = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
          {item.id.channelId && (
            <ChannelCard channelDetail={item}></ChannelCard>
          )}
        </Box>
      ))}
    </Stack>
  );
};
export default Video;
