import { Grid, Card, Typography, Button, CardMedia, CardContent, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


const GroceryAndGoodsCard = ({ post }) => {
    //const dispatch = useDispatch();
    //const user = JSON.parse(localStorage.getItem("profile"));
    return (
        <>
            <Button
                component={Link}
                type={"button"}
                //to={`/restaurant/${post._id}`}
                fullWidth
                style={{ padding: "0px" }}
            >
                <Box
                    component={Card}
                    sx={{
                        width: "100%",
                        transition: "0.3s",
                        boxShadow: "0 8px 15px -12px rgba(0,0,0,0.3)",
                        "&:hover": {
                          boxShadow: "0 16px 30px -12.125px rgba(0,0,0,0.3)",
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        height="150"
                        image={post.image}
                        alt={"test"}
                    />
                    <CardContent>
                        <Typography
                            align={"center"}
                            style={{ fontWeight: "bold", padding: "10px 10px 0px 0px" }}
                        >
                            {post.name}
                        </Typography>
                    </CardContent>
                </Box>
            </Button>
        </>
    );
};

export default GroceryAndGoodsCard;
