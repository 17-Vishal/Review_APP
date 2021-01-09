import express from 'express';

import { getReviews, createReview, updateReview, deleteReview, likeReview, getmoviesReviews, getbooksReviews } from '../controllers/reviews.js';
const router = express.Router();

router.get('/', getReviews);
router.get('/movies', getmoviesReviews);
router.get('/books', getbooksReviews);
router.post('/', createReview);
router.patch('/:id', updateReview);
router.delete('/:id', deleteReview);
router.patch('/:id/likeReview', likeReview);
// router.patch('/:id/likePost', l

export default router;
