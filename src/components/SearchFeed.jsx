import {
  useEffect,
  useState,
} from 'react';

import { useParams } from 'react-router-dom';

import {
  Box,
  Typography,
} from '@mui/material';

import { fetchFromApi } from '../utils/fetchFromApi';
import Video from './Video';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={8} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}} style={{color:"inherit"}}>
       Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Video videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;