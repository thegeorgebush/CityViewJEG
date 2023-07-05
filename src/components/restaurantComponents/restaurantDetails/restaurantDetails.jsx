import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { getPost } from '../../../actions/posts';

const restaurantDetails = () => {
    const { post, posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    if (!post) return null;


    return !posts.length ? (<><Paper elevation={6}>
        <CircularProgress size={"7em"} />
    </Paper></>) : (
        <>
            <div>{post.title}</div>
        </>

    )
}

export default restaurantDetails