import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import eventPosts from "./eventPosts";

export default combineReducers({
  posts,
  auth,
  eventPosts
});
