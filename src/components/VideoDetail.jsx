import React, { useEffect, useState } from "react";

import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { fetchFromApi } from "../utils/fetchFromApi";
import Loader from "./Loader";
import Video from "./Video";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics, thumbnails&id=${id}`).then(
      (data) => setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );

    fetchFromApi(
      `commentThreads?part=snippet&videoId=${id}&maxResults=50`
    ).then((data) => setComments(data?.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description, publishedAt },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  const person = { firstName: "John", lastName: "Doe", age: 46 };
  console.log(person.firstName);
  return (
    <Box minHeight="95vh" sx={{ mt: { md: 8, xs: 6.5 } }}>
      {/* {console.log(comments.snippet.topLevelComment.snippet.textDisplay)} */}
      {/* {console.log(videos)} */}
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="inherit" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "inherit" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: "h6" }} color="red">
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "inherit", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Stack className="date">Upload At: {publishedAt}</Stack>
          <Stack className="description">{description.slice(500, 1500)}</Stack>
          <Typography variant="h4" sx={{ paddingLeft: "14px" }}>
            Comments...
          </Typography>
          {comments?.map((comment, key) => {
            return (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 800,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Link to={`/channel/${channelId}`}>
                      <Avatar
                        src={
                          comment?.snippet?.topLevelComment?.snippet
                            ?.authorProfileImageUrl
                        }
                      ></Avatar>
                    </Link>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      comment?.snippet?.topLevelComment?.snippet
                        ?.authorDisplayName
                    }
                    secondary={
                      comment?.snippet?.topLevelComment?.snippet?.textDisplay ||
                      "Nice"
                    }
                  />
                </ListItem>
              </List>
            );
          })}
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
