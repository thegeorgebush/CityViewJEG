import React, { Suspense, useEffect, useState, useRef } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Paper
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createEventPost, updateEventPost } from "../../../actions/eventPosts";

const EventForm = ({ currentEventId, setCurrentEventId }) => {
  const [postData, setPostData] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
    eventImage: ""
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  const post = useSelector((state) =>
    currentEventId ? state.posts.find((p) => p._id === currentEventId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentEventId) {
      dispatch(
        updateEventPost(currentEventId, {
          ...postData,
          name: user?.result?.name
        })
      );
    } else {
      dispatch(createEventPost({ ...postData, name: user?.result?.name }));
    }

    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper style={{ padding: "100px" }}>
        <Typography variant="h6" align="center">
          Please sign in to customize event
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentEventId(null);
    setPostData({
      title: "",
      message: "",
      image: ""
    });
  };

  return (
    <div className="App">
      <Grid container spacing={3} align={"center"} justifyContent={"center"}>
        <Grid item xs={11} md={11} lg={10}>
          <Typography variant={"h6"} align={"left"} style={{ fontWeight: 600 }}>
            {currentEventId ? "Edit" : "Create"} Event
          </Typography>
          <Divider style={{ margin: "1% 0% 0% 0%" }} />
        </Grid>
        <Grid item>
          <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <TextField
                name="EventName"
                variant="outlined"
                label="Event Name"
                fullWidth
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
              <TextField
                name="EventDescription"
                variant="outlined"
                label="Event Description"
                fullWidth
                value={postData.message}
                onChange={(e) =>
                  setPostData({ ...postData, message: e.target.value })
                }
              />
              <TextField
                name="EventImage"
                variant="outlined"
                label="Event Image"
                fullWidth
                value={postData.image}
                onChange={(e) =>
                  setPostData({ ...postData, image: e.target.value })
                }
              />

              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={clear}
                fullWidth
              >
                Clear
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default EventForm;
