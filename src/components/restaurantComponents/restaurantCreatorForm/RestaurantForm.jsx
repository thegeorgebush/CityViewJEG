import React, { Suspense, useEffect, useState, useRef } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Paper,
  IconButton,
  Box,
  Card,
  CardMedia
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../../actions/posts";
import RestaurantMenuCards from "./restaurantMenuCards/restaurantMenuCards";
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const RestaurantForm = ({ currentId, setCurrentId }) => {
  //const location = useLocation(); 
  //const currentId = location.state?.currentId;
  const [editIndex, setEditIndex] = useState(0);
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    image: "",
    menu: [
      {
        category: {
          catName: "",
          menuItems: [{
            name: "",
            description: "",
            price: 0
          }]

        }
      }
    ]
  });

  const user = JSON.parse(localStorage.getItem("profile"));

  const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(currentId)
    console.log(post);
    if (post) 
      setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }

    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper style={{ padding: "100px" }}>
        <Typography variant="h6" align="center">
          Please sign in to customize restaurant
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      image: "",
      menu: [
        {
          category: {
            catName: "",
            menuItems: [{
              name: "",
              description: "",
              price: 0
            }]

          }
        }
      ]
    });
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        //align={"center"}
        //justifyContent={"center"}
        style={{
          background:
            "linear-gradient(0deg, rgba(42, 145, 8, 0.2), rgba(42, 145, 8, 0.2)),#1fe437"
        }}
      >
        {postData.image != "" ? (
          <Grid item style={{ width: "100%" }}>
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={postData.image}
                alt="burgers"
              />
            </Card>
          </Grid>
        ) : null}
        <Grid
          item
          container
          lg={3}
          justifyContent={"center"}
          spacing={2}
          style={{
            position: "sticky",
            background: "white",
            marginTop: `${postData.image === "" ? "20%" : "0"}`
          }}
        >
          <Grid container style={{ alignSelf: "flex-start", position: "sticky", top: "90px" }}>
            {postData.menu.map((post) => (
              <Grid item lg={12}>
                <Button fullWidth>{post.category.catName}</Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={9}
          //justifyContent={"center"}
          spacing={2}
          style={{
            position: "sticky",
            background: "white",
            marginTop: `${postData.image === "" ? "20%" : "0"}`
          }}
        >
          <Grid item xs={12} lg={1} />
          {editIndex === 1 ? (
            <Grid item xs={12} md={12} lg={12}>
              <TextField
                name="RestaurantName"
                variant="outlined"
                label="Restaurant Name"

                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
              <IconButton onClick={() => setEditIndex(0)}><CheckIcon /></IconButton>
            </Grid>
          ) :
            <Grid item xs={12} md={12} lg={12}>
              <Box display="flex" alignItems="center">
                <Typography variant="h4" fontWeight={"bold"}>{postData.title}</Typography>
                <IconButton onClick={() => setEditIndex(1)}><EditIcon /></IconButton>
              </Box>
            </Grid>}
          {editIndex === 2 ? (
            <Grid item xs={12} md={12} lg={12}>
              <TextField
                name="RestaurantDescription"
                variant="outlined"
                label="Restaurant Description"

                value={postData.message}
                onChange={(e) =>
                  setPostData({ ...postData, message: e.target.value })
                }
              />
              <IconButton onClick={() => setEditIndex(0)}><CheckIcon /></IconButton>
            </Grid>
          ) :
            <Grid item xs={12} md={12} lg={12}>
              <Box display="flex" alignItems="center">
                <Typography color={"grey"}>{postData.message}</Typography>
                <IconButton onClick={() => setEditIndex(2)}><EditIcon /></IconButton>
              </Box>
            </Grid>}
          {editIndex === 3 ? (
            <Grid item xs={12}>
              <TextField
                name="RestaurantImage"
                variant="outlined"
                label="Restaurant Image"
                value={postData.image}
                onChange={(e) =>
                  setPostData({ ...postData, image: e.target.value })
                }
              />
              <IconButton onClick={() => setEditIndex(0)}><CheckIcon /></IconButton>
            </Grid>
          ) :
            <Grid item xs={12} md={12} lg={12}>
              <Box display="flex" alignItems="center">
                <Typography>Edit Image</Typography>
                <IconButton onClick={() => setEditIndex(3)}><EditIcon /></IconButton>
              </Box>
            </Grid>}
          <Grid item xs={11} md={11} lg={11}>
            <Typography variant={"h6"} align={"left"} style={{ fontWeight: 600 }}>
              {currentId ? "Edit" : "Create"} Restaurant
            </Typography>
            <Divider style={{ margin: "1% 0% 0% 0%" }} />
          </Grid>
          <Grid item container xs={12} spacing={2}>
            {postData.menu.map((post, index) => (
              <Grid item key={index} xs={11}>
                <TextField
                  name="CategoryName"
                  variant="outlined"
                  label="Category Name"
                  value={post.category.catName}
                  onChange={(e) => {
                    let newMenu = [...postData.menu]; // create a copy of the menu array
                    newMenu[index].category.catName = e.target.value; // update the category name of the specific object
                    setPostData({
                      ...postData,
                      menu: newMenu // set the menu to the updated array
                    });
                  }}
                />
                <IconButton onClick={(e) => {
                  let newMenu = [...postData.menu]; // create a copy of the menu array
                  newMenu.splice(index, 1); // remove the item at the specific index
                  setPostData({
                    ...postData,
                    menu: newMenu // set the menu to the updated array
                  });
                }}><DeleteIcon /></IconButton>

                <Divider style={{ margin: "1% 0% 1% 0%" }} />
                <RestaurantMenuCards postData={postData} setPostData={setPostData} post={post} menuIndex={index} />
              </Grid>
            ))}

            <Grid item xs={3}>
              <Paper>
                <Button fullWidth onClick={() => {
                  setPostData({
                    ...postData, menu: [
                      ...postData.menu, {
                        category: {
                          catName: "",
                          menuItems: [{ name: "", description: "", price: 0 }]
                        }
                      }
                    ]
                  });
                }}>+ Add a Category</Button>
              </Paper>
            </Grid>
            <Grid lg={7} />
            <Grid item xs={5}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={clear}
                fullWidth
              >
                Clear
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </form>
  );
};

export default RestaurantForm;
