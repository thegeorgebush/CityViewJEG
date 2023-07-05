import { Grid, Card, Typography, Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deletePost } from "../../../../actions/posts";

const RestaurantCard = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <Button
        component={Link}
        type={"button"}
        to={`/restaurant/${post._id}`}
        fullWidth
        style={{ padding: "0px" }}
      >
        <Card style={{ width: "100%" }}>
          <CardMedia
            component="img"
            height="300"
            image={post.image}
            alt={"test"}
          />
        </Card>
      </Button>
      <Typography
        align={"left"}
        style={{ fontWeight: "bold", padding: "10px 10px 0px 0px" }}
      >
        {post.title}
      </Typography>
      <Typography align={"left"} style={{ color: "grey" }}>
        {post.message} minute walk
      </Typography>
      {user?.result?.googleId === post?.creator ||
        (user?.result?._id === post?.creator && (
          <Button onClick={() => setCurrentId(post._id)}>Edit</Button>
        ))}
      {user?.result?.googleId === post?.creator ||
        (user?.result?._id === post?.creator && (
          <Button onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
        ))}
    </>
  );
};

export default RestaurantCard;
