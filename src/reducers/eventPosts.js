import { FETCH_ALL_EVENTS, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (eventPosts = [], action) => {
  switch (action.type) {
    case DELETE:
      return eventPosts.filter((eventPost) => eventPost._id !== action.payload);
    case UPDATE:
      return eventPosts.map((eventPost) =>
        eventPost._id === action.payload._id ? action.payload : eventPost
      );
    case FETCH_ALL_EVENTS:
      return action.payload;
    case CREATE:
      return [...eventPosts, action.payload];
    default:
      return eventPosts;
  }
};
