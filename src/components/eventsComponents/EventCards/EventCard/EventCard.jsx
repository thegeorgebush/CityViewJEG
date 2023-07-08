import { Card, Typography, Button, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteEventPost } from "../../../../actions/eventPosts";

const EventCard = ({ eventPost, setCurrentEventId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <Button
        component={Link}
        type={"button"}
        //to="/RestaurantPage"
        style={{ padding: "0px", textTransform: "none" }}
        fullWidth
      >
        <Card style={{ width: "100%" }}  >
          <CardMedia
            component="img"
            height="300"
            image={eventPost.eventImage}
            alt={"test"}
          />
          <CardContent style={{ padding: "10px" }}>
            <Typography
              align={"left"}
              style={{ fontWeight: "bold", padding: "10px 10px 0px 0px" }}
            >
              {eventPost.eventName}
            </Typography>
            <Typography align={"left"} style={{ color: "grey" }}>
              {eventPost.eventDate}
            </Typography>
            <Typography align={"left"} style={{ color: "grey" }}>
              {eventPost.eventDescription}
            </Typography>

            {<Button onClick={() => setCurrentEventId(eventPost._id)}>Edit</Button>}
            {<Button onClick={() => dispatch(deleteEventPost(eventPost._id))}>Delete</Button>}
            {/*user?.result?.googleId === eventPost?.creator ||
            (user?.result?._id === eventPost?.creator && (
              
            ))*/}
            {user?.result?.googleId === eventPost?.creator ||
              (user?.result?._id === eventPost?.creator && (
                <Button onClick={() => dispatch(deleteEventPost(eventPost._id))}>
                  Delete
                </Button>
              ))}
          </CardContent>
        </Card>
      </Button>
    </>
  );
};

export default EventCard;
