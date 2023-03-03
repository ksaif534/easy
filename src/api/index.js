import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5001'});

export const createLearningSpace = (formData) => API.post(`/learning-spaces/create-learning-space`,formData);
export const getLearningSpaces = () => API.get(`/learning-spaces`);
export const getLearningSpace = (id) => API.get(`/learning-spaces/${id}/learning-space`);