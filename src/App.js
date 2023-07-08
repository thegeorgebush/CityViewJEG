import "./styles.css";
import React, { useEffect, useState } from "react";
//import RestaurantPortal from "./components/restaurantPage/RestaurantPortal";
//import RestaurantPage from "./components/restaurantPage/RestaurantPage";
//import RestaurantCreatorPage from "./components/restaurantPage/restaurantCreator/RestaurantCreatorPage";
import RestaurantForm from "./components/restaurantComponents/restaurantCreatorForm/RestaurantForm";
import RestaurantDetails from "./components/restaurantComponents/restaurantDetails/restaurantDetails";
import MainDashboard from "./MainDashboard";
import AppBar from "./components/appBar/appBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
//import MapPage from "./testmap";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { getEventPosts } from "./actions/eventPosts";
import Auth from "./components/Auth/Auth";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [currentEventId, setCurrentEventId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getEventPosts());
  }, [currentId, currentEventId, dispatch]);


  return (
    <>
      <Router>
        <AppBar />
        <Routes>

          <Route exact path="/auth" element={<Auth />} />
          <Route
            exact
            path="/"
            element={
              <MainDashboard
                currentId={currentId}
                setCurrentId={setCurrentId}
                currentEventId={currentEventId}
                setCurrentEventId={setCurrentEventId}
              />
            }
          />
          <Route exact path="/restaurantForm" element={<RestaurantForm currentId={currentId} setCurrentId={setCurrentId} />} />
          <Route exact path="/restaurant/:id" element={<RestaurantDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
