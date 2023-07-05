import { Card, TextField, Button, CardMedia, Typography, CardContent, Grid, IconButton } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const restaurantMenuCard = ({ menuItem, setPostData, postData, menuIndex, itemIndex }) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    return (
        <>
            <Card style={{ width: "100%" }}>
                <Grid container direction={"row"} alignItems={"center"} spacing={0}>
                    <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            height={100}
                            //image={post.image}
                            alt={"test"}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <CardContent>
                            <TextField
                                style={{ fontWeight: "bold" }}
                                name="ItemName"
                                variant="outlined"
                                label="Item Name"
                                value={menuItem.description}
                                onChange={(e) => {
                                    let newMenu = [...postData.menu]; // create a copy of the menu array
                                    newMenu[menuIndex].category.menuItems[itemIndex].name = e.target.value; // update the item name of the specific object
                                    setPostData({
                                        ...postData,
                                        menu: newMenu // set the menu to the updated array
                                    });
                                }}
                            />
                            <TextField
                                style={{ fontWeight: "bold" }}
                                name="ItemDescription"
                                variant="outlined"
                                label="Item Description"
                                value={menuItem.description}
                                onChange={(e) => {
                                    let newMenu = [...postData.menu]; // create a copy of the menu array
                                    newMenu[menuIndex].category.menuItems[itemIndex].description = e.target.value; // update the item name of the specific object
                                    setPostData({
                                        ...postData,
                                        menu: newMenu // set the menu to the updated array
                                    });
                                }}
                            />
                            <TextField
                                style={{ fontWeight: "bold" }}
                                name="ItemPrice"
                                variant="outlined"
                                label="Item Price"
                                value={menuItem.price}
                                onChange={(e) => {
                                    let newMenu = [...postData.menu]; // create a copy of the menu array
                                    newMenu[menuIndex].category.menuItems[itemIndex].price = e.target.value; // update the item name of the specific object
                                    setPostData({
                                        ...postData,
                                        menu: newMenu // set the menu to the updated array
                                    });
                                }}
                            />
                        </CardContent>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={(e) => {
                            let newMenu = [...postData.menu]; // create a copy of the menu array
                            newMenu[menuIndex].category.menuItems.splice(itemIndex, 1); // remove the item at the specific index
                            setPostData({
                                ...postData,
                                menu: newMenu // set the menu to the updated array
                            });
                        }}><DeleteIcon /></IconButton>

                    </Grid>
                </Grid>
            </Card>
            {/*user?.result?.googleId === post?.creator ||
                (user?.result?._id === post?.creator && (
                    <Button onClick={() => setCurrentId(post._id)}>Edit</Button>
                ))*/}
            {/*user?.result?.googleId === post?.creator ||
                (user?.result?._id === post?.creator && (
                    <Button onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
                ))*/}
        </>
    )
}

export default restaurantMenuCard
