import React, { useRef } from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

import RestaurantCard from "./restaurantCard/RestaurantCard";

const RestaurantCards = ({ setCurrentId }) => {
  const {posts} = useSelector((state) => state.posts);
  const scrollRef = useRef();

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
      <Box ref={scrollRef} sx={{
        display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {posts.map((post) => (
          <Box key={post._id} sx={{ flexShrink: 0, minWidth: 300, maxWidth: 300, margin: 1 }}>
            <RestaurantCard post={post} setCurrentId={setCurrentId} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RestaurantCards;
