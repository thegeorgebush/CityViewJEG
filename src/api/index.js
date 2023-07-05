import axios from "axios";

const API = axios.create({ baseURL: "https://6b244q-6000.preview.csb.app" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const fetchEventPosts = () => API.get("/eventPosts");
export const createEventPost = (newPost) => API.post("/eventPosts", newPost);
export const updateEventPost = (id, updatedPost) =>
  API.patch(`/eventPosts/${id}`, updatedPost);
export const deleteEventPost = (id) => API.delete(`/eventPosts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
