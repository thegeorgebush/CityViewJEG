import { Card, TextField, Button, CardMedia, Typography, CardContent, Grid, IconButton, CardActionArea, Box, createTheme } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const restaurantMenuCard = ({ menuItem, setPostData, postData, menuIndex, itemIndex, itemEdit, setItemEdit }) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const theme = createTheme();
    return (
        <>
            {itemEdit === itemIndex ? (
                <Card style={{ width: "100%" }}>
                    <Grid container direction={"row"} alignItems={"center"} spacing={0}>
                        <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                height={100}
                                image={menuItem.description}
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
                                    value={menuItem.name}
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
                            <CardActionArea onClick={() => setItemEdit(postData.menu[menuIndex].category.menuItems.length)}>
                                <Typography>Done</Typography>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton onClick={(e) => {
                                let newMenu = [...postData.menu]; // create a copy of the menu array
                                newMenu[menuIndex].category.menuItems.splice(itemIndex, 1); // remove the item at the specific index
                                setPostData({
                                    ...postData,
                                    menu: newMenu // set the menu to the updated array
                                });
                                setItemEdit(postData.menu[menuIndex].category.menuItems.length - 1);
                            }}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Card>
            ) : <Box
                component={Card}
                sx={{
                    width: "100%",
                    position: "relative",
                    transition: "0.3s",
                    boxShadow: "0 0px 0px -12px rgba(0,0,0,0.3)",
                    "&:hover": {
                        boxShadow: "0 16px 30px -12.125px rgba(0,0,0,0.3)",
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="150"
                    image={menuItem.description}
                    alt={"test"}
                />
                <Button style={{
                    position: 'absolute',
                    bottom: theme.spacing(1),
                    right: theme.spacing(1),
                }} onClick={() => setItemEdit(itemIndex)}>
                    Edit
                </Button>
                <CardContent>
                    <Typography
                        align={"left"}
                        style={{ fontWeight: "bold", padding: "10px 10px 0px 0px" }}
                    >
                        {menuItem.name}
                    </Typography>
                    <Typography
                        align={"left"}
                        color={"grey"}
                    >
                        ${menuItem.price}
                    </Typography>
                </CardContent>

            </Box>
            }
        </>
    )
}

export default restaurantMenuCard
