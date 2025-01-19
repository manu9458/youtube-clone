import React from "react";

import { Link } from "react-router-dom";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      {/* <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>  */}

      <CardActionArea>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140px"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        />
        <CardContent>
          <Grid container>
            <Grid item xs={2} md={2}>
              {/* <Avatar src={ snippet?.thumbnails?.high?.url || demoProfilePicture}></Avatar> */}
            </Grid>
            <Grid item xs={10} md={10}>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {snippet?.title?.slice(0, 60) || demoVideoTitle?.slice(0, 60)}
              </Typography>
              <Typography variant="subtitle2" color="gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);

export default VideoCard;
