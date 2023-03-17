import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5001'});

export const createLearningSpace = (formData) => API.post(`/learning-spaces/create-learning-space`,formData);
export const getLearningSpaces = () => API.get(`/learning-spaces`);
export const getLearningSpace = (id) => API.get(`/learning-spaces/${id}/learning-space`);
export const createPost = (formData,id) => API.post(`/learning-spaces/learning-space/${id}/posts/create-post`,formData);
export const fetchPosts = (id) => API.get(`/learning-spaces/learning-space/${id}/posts`);