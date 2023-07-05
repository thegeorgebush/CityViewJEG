import { FETCH_ALL_POSTS, FETCH_POST, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

const initialState = {
  posts: [],
  post: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
