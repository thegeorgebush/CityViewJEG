import React, { useRef } from "react";
import { Box, CircularProgress, IconButton, Grid, Paper, Button } from "@mui/material";
import { useSelector } from "react-redux";

import RestaurantMenuCard from "./restaurantMenuCard/restaurantMenuCard";

const RestaurantMenuCards = ({ postData, setPostData, post, menuIndex }) => {
    const { posts } = useSelector((state) => state.posts);
    const scrollRef = useRef();

    console.log(posts);
    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid container spacing={3} alignItems={"center"}>
            {post.category.menuItems.map((menuItem, index) => (
                <Grid item xs={4} key={index}>
                    <RestaurantMenuCard menuItem={menuItem} setPostData={setPostData} postData={postData} menuIndex={menuIndex} itemIndex={index} />
                </Grid>
            ))}
            <Grid item xs={4}>
                <Paper >
                    <Button fullWidth onClick={() => {
                        let newMenu = [...postData.menu];
                        newMenu[menuIndex].category.menuItems.push({ name: "", description: "", price: 0 });
                        setPostData({
                            ...postData,
                            menu: newMenu
                        });
                    }}
                    style={{padding: "40px"}}>Add an Item+</Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default RestaurantMenuCards;
