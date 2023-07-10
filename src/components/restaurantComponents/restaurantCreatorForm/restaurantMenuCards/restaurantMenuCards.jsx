import React, { useEffect, useRef, useState } from "react";
import { Box, CircularProgress, IconButton, Grid, Paper, Button } from "@mui/material";
import { useSelector } from "react-redux";

import RestaurantMenuCard from "./restaurantMenuCard/restaurantMenuCard";

const RestaurantMenuCards = ({ postData, setPostData, post, menuIndex }) => {
    const { posts } = useSelector((state) => state.posts);
    const [editIndex, setEditIndex] = useState(100); 
    const scrollRef = useRef();
    console.log(post.category.menuItems.length);
    
    //console.log("edit index:" + editIndex)
    console.log(posts);
    
    
    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid container spacing={3} alignItems={"center"}>
            {post.category.menuItems.map((menuItem, index) => (
                <Grid item xs={4} key={index}>
                    <RestaurantMenuCard menuItem={menuItem} setPostData={setPostData} postData={postData} menuIndex={menuIndex} itemIndex={index} itemEdit={editIndex} setItemEdit={setEditIndex} />
                </Grid>
            ))}
            {editIndex >= post.category.menuItems.length ? (
                <Grid item xs={4}>
                    <Paper >
                        <Button fullWidth onClick={() => {
                            let newMenu = [...postData.menu];
                            newMenu[menuIndex].category.menuItems.push({ name: "", description: "", price: 0 });
                            setPostData({
                                ...postData,
                                menu: newMenu
                            });
                            setEditIndex(post.category.menuItems.length - 1);
                        }}
                            style={{ padding: "40px" }}>Add an Item+</Button>
                    </Paper>
                </Grid>
            ) : null}
        </Grid>
    );
};

export default RestaurantMenuCards;
