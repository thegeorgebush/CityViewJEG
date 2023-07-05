import React, { useRef } from "react";
import { Box, CircularProgress, IconButton, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import EventCard from "./EventCard/EventCard";

const EventCards = ({ setCurrentEventId }) => {
  const eventPosts = useSelector((state) => state.eventPosts);
  const scrollRef = useRef(null);


  console.log(eventPosts);
  return !eventPosts.length ? (
    <CircularProgress />
  ) : (
    <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
      <Box ref={scrollRef} sx={{
        display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {eventPosts.map((eventPost) => (
          <Box key={eventPost._id} sx={{ flexShrink: 0, minWidth: 300, maxWidth: 300, margin: 1 }}>
            <EventCard eventPost={eventPost} setCurrentId={setCurrentEventId} />
          </Box>
        ))}
        <Button
          variant={"text"}
          component={Link}
          type={"button"}
          to={"/RestaurantPortal"}
        >
          View all+
        </Button>
      </Box>
    </Box>
  );
};

export default EventCards;
