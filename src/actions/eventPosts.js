import { FETCH_ALL_EVENTS, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api";

//Action creators
export const getEventPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEventPosts();
    dispatch({ type: FETCH_ALL_EVENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createEventPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createEventPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateEventPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateEventPost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEventPost = (id) => async (dispatch) => {
  try {
    await api.deleteEventPost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
