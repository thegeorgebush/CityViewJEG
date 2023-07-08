import React, { useRef } from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

import GroceryAndGoodsCard from "./GroceryAndGoodsCard/GroceryAndGoodsCard";

const GroceryAndGoodsCards = ({ setCurrentId }) => {
    const posts = [{name: "Snacks", image: "https://th.bing.com/th/id/OIG.bN3n86Th50APigLsaD90?pid=ImgGn"}, {name: "Beverages", image: "https://th.bing.com/th/id/OIG.2L7tnLWiDBquEvDWzhDk?pid=ImgGn"},{name: "Meat", image: "https://th.bing.com/th/id/OIG.rOdg7AP1GW60V_tG24HH?pid=ImgGn"},{name: "Frozen", image: "https://th.bing.com/th/id/OIG.NfNhD4S2KezPyUwdIv9X?pid=ImgGn"},{name: "Bakery", image: "https://th.bing.com/th/id/OIG.aRMglkAXYLCxgmvsRt3a?pid=ImgGn"}, {name: "Dairy", image: "https://th.bing.com/th/id/OIG.cBxKS1KaB1qTx0Fh3UiI?pid=ImgGn"},{name: "Alchohol", image: ""}];
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
                    <Box key={index} sx={{ flexShrink: 0, minWidth: 200, maxWidth: 200, margin: 1 }}>
                        <GroceryAndGoodsCard post={post} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default GroceryAndGoodsCards;
