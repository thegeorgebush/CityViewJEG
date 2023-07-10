import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';

const FeaturedCard = ({ post }) => {
    return (
        <Button style={{ padding: "0px", textTransform: "none" }}
            fullWidth>
            <Grid container>
                <Grid item xs={12} lg={12}>
                    <Card style={{ backgroundColor: `${post.color}`, width: "100%" }}>
                        <Grid container>
                            <Grid item xs={12} lg={7}>
                                <CardContent>
                                    <Typography color={"white"} align='left' variant='h4'>{post.text}</Typography>
                                    <br />
                                    <Box textAlign={"left"} >
                                        <Button variant='contained'>Browse More</Button>
                                    </Box>
                                </CardContent>
                            </Grid>

                            <Grid item xs={12} lg={5}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={post.image}
                                    alt={"test"}
                                />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Button>
    );
}

export default FeaturedCard;
