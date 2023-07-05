import "./styles.css";
import React, { useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  Button,
  ButtonGroup,
  CardMedia,
  Divider,
  Paper
} from "@mui/material";
//import RestaurantCard from "./components/restaurantPage/RestaurantCard";
import { Link } from "react-router-dom";
//import Map from "./MapComponent";
import RestaurantForm from "./components/restaurantComponents/restaurantCreatorForm/RestaurantForm.jsx";
import RestaurantCards from "./components/restaurantComponents/restaurantCards/RestaurantCards";
//import Pagination from "./components/Pagination";
import EventForm from "./components/eventsComponents/EventForm/EventForm";
import EventCards from "./components/eventsComponents/EventCards/EventCards";

const MainDashboard = ({
  currentId,
  setCurrentId,
  currentEventId,
  setCurrentEventId
}) => {
  return (
    <div className="App">
      <Grid
        container
        spacing={3}
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          background:
            "linear-gradient(0deg, rgba(42, 145, 8, 0.2), rgba(42, 145, 8, 0.2)),#1fe437"
        }}
      >
        <Grid item xs={11} md={11} lg={10}>
          <Grid
            container
            style={{
              position: "fixed"
            }}
          >
            <Grid item xs={12} lg={6}>
              <Typography
                align={"left"}
                variant={"h3"}
                style={{
                  marginTop: "4%",
                  fontWeight: "bold",
                  fontFamily: "sans-serif"
                }}
              >
                {/**Whats Going On In the Neighborhood: */}
                Welcome To Your Neighborhood Hub.
              </Typography>
              <Typography align={"left"} style={{ marginTop: "1%" }}>
                Find events, restuarants, groceries, and more all within walking
                distance.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              
            </Grid>
            <Grid item style={{ marginBottom: "30%" }} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Grid
            container
            justifyContent={"center"}
            spacing={3}
            style={{
              position: "sticky",
              background: "white",
              marginTop: "20%"
            }}
          >
            <Grid item xs={11} md={11} lg={10} />
            <Grid item xs={11} md={11} lg={10}>
              <Typography
                variant={"h5"}
                align={"left"}
                style={{ fontWeight: 600 }}
              >
                Events:
              </Typography>
              <Divider style={{ margin: "1% 0% 0% 0%" }} />
            </Grid>
            <Grid item xs={12} lg={10}>
              <EventCards setCurrentEventId={setCurrentEventId} />
            </Grid>
            <Grid item xs={11} md={11} lg={10}>
              <Typography
                variant={"h5"}
                align={"left"}
                style={{ fontWeight: 600 }}
              >
                Restaurants
              </Typography>
              
              <Divider style={{ margin: "1% 0% 0% 0%" }} />
            </Grid>
            <Grid item xs={12} lg={10}>
              <RestaurantCards setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={11} md={11} lg={10}>
              <Typography
                variant={"h5"}
                align={"left"}
                style={{ fontWeight: 600 }}
              >
                Convenience
              </Typography>
              <Divider style={{ margin: "1% 0% 0% 0%" }} />
            </Grid>
            <Grid item xs={11} md={11} lg={10}>
              <Typography
                variant={"h5"}
                align={"left"}
                style={{ fontWeight: 600 }}
              >
                News
              </Typography>
              <Divider style={{ margin: "1% 0% 0% 0%" }} />
            </Grid>
            <Grid item>
              <EventForm
                setCurrentEventId={setCurrentEventId}
                currentEventId={currentEventId}
              />
            </Grid>
            <Grid item xs={11} md={11} lg={10}>
              <Typography
                variant={"h5"}
                align={"left"}
                style={{ fontWeight: 600 }}
              >
                Co-Work
              </Typography>
              <Divider style={{ margin: "1% 0% 0% 0%" }} />
            </Grid>
            <Grid item xs={11} md={11} lg={10}>
              <Typography
                variant={"h5"}
                align={"left"}
                style={{ fontWeight: 600 }}
              >
                Games
              </Typography>
              <Divider style={{ margin: "1% 0% 0% 0%" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainDashboard;
