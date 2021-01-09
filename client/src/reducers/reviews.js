// import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (reviews = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_ALL_MOVIES':
      return action.payload;
    case 'FETCH_ALL_BOOKS':
      return action.payload;
    case 'LIKE':
      return reviews.map((review) => (review._id === action.payload._id ? action.payload : review));
    case 'CREATE':
      return [...reviews, action.payload];
    case 'UPDATE':
      return reviews.map((review) => (review._id === action.payload._id ? action.payload : review));
    case 'DELETE':
      return reviews.filter((review) => review._id !== action.payload); //filter deleted
    default:
      return reviews;
  }
};
