import React, { useRef } from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

import FeaturedCard from "./FeaturedCard/FeaturedCard";

const FeaturedCards = ({ setCurrentId }) => {
    const posts = [{text: "New mouthwatering item has just landed at your go-to spot!", image: "https://static.wikia.nocookie.net/0785bf56-ce8c-4d20-a979-2faf2dd63077/scale-to-width/755", color: "#5C8AF7"}, {text: "Buy 1 get one free. It's FREE!", image: "https://www.pngall.com/wp-content/uploads/13/Buy-Get-Free-PNG-Images.png", color: "#E05EA1"},{text: "All you can drink, say no more!", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcybyhy-6ef54a10-6b5f-4ca2-853a-342655df2403.png/v1/fill/w_900,h_876/glass_of_beer_on_a_transparent_background_by_prussiaart_dcybyhy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODc2IiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY3lieWh5LTZlZjU0YTEwLTZiNWYtNGNhMi04NTNhLTM0MjY1NWRmMjQwMy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.0oLS2X5OaVo0L5YCctIJJVqhFIfjC8b6b4vZDfswZvk", color: "#F7C25C"}];
    const scrollRef = useRef();

    //console.log(posts);
    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
            <Box ref={scrollRef} sx={{
                display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }}>
                {posts.map((post, index) => (
                    <Box key={index} sx={{ flexShrink: 0, minWidth: 600, maxWidth: 600, margin: 1 }}>
                        <FeaturedCard post={post} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default FeaturedCards;
