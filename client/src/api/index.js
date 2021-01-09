import axios from 'axios';

const url = 'http://localhost:5000';
// const url = 'https://learnmemories.herokuapp.com/posts';
export const fetchReviews = () => axios.get(url);
export const fetchmoviesReviews = () => axios.get(`${url}/movies`);

export const fetchbooksReviews = () => axios.get(`${url}/books`);

export const createReview = (newReview) => axios.post(url, newReview);


export const likeReview = (id) => axios.patch(`${url}/${id}/likeReview`);
export const updateReview = (id, updatedReview) => axios.patch(`${url}/${id}`, updatedReview);
export const deleteReview = (id) => axios.delete(`${url}/${id}`);
