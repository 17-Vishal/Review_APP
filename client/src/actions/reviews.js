import * as api from '../api/index.js';


export const getReviews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchReviews();
    // const { type } = 
    dispatch({ type: 'FETCH_ALL', payload: data });

  } catch (error) {
    console.log(error);
  }
};


export const getmoviesReviews = () => async (dispatch) => {
    try {
      const { data } = await api.fetchmoviesReviews();
  
      dispatch({ type: 'FETCH_ALL_MOVIES', payload: data });

    } catch (error) {
      console.log(error);
    }
  };

  export const getbooksReviews = () => async (dispatch) => {
    try {
      const { data } = await api.fetchbooksReviews();
  
      dispatch({ type: 'FETCH_ALL_BOOKS', payload: data });

    } catch (error) {
      console.log(error);
    }
  };


  export const createReview = (review) => async (dispatch) => {
    try {
      const { data } = await api.createReview(review);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateReview = (id, review) => async (dispatch) => {
    try {
      const { data } = await api.updateReview(id, review);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  
export const deleteReview = (id) => async (dispatch) => {
  try {
    await api.deleteReview(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};


export const likeReview = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeReview(id);

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
