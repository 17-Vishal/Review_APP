import express from 'express';
import mongoose from 'mongoose';

import ReviewMessage from '../models/reviewMessage.js';

const router = express.Router();


export const getReviews = async (req, res) => { 
    // const { type } = req.body;
    try {
        
        const reviewMessages = await ReviewMessage.find({check: type});
                
        res.status(200).json(reviewMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getmoviesReviews = async (req, res) => { 
    // const { type } = req.body;
    try {
        
        const reviewMessages = await ReviewMessage.find({check: "Movie"});
                
        res.status(200).json(reviewMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getbooksReviews = async (req, res) => { 
    // const { type } = req.body;
    try {
        
        const reviewMessages = await ReviewMessage.find({check: "Book"});
                
        res.status(200).json(reviewMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReview = async (req, res) => {
    const { title, check, review, selectedFile, creator, tags } = req.body;

    const newReviewMessage = new ReviewMessage({ title, check, review, selectedFile, creator, tags })

    try {
        await newReviewMessage.save();

        res.status(201).json(newReviewMessage );
    } catch (error) {
        res.status(409).json({ message: error });
    }
}

export const updateReview = async (req, res) => {
    const { id } = req.params;
    const { title, check, review, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No review with id: ${id}`);

    const updatedReview = { creator, title, check, review, tags, selectedFile, _id:id };

    await ReviewMessage.findByIdAndUpdate(id, updatedReview, { new: true });

    res.json(updatedReview);
} 

export const deleteReview = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No review with id: ${id}`);

    await ReviewMessage.findByIdAndRemove(id);

    console.log('Delete');
    res.json({ message: "Post deleted successfully." });
}

export const likeReview = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No review with id: ${id}`);
    
    const review = await ReviewMessage.findById(id);

    const updatedReview = await ReviewMessage.findByIdAndUpdate(id, { likeCount: review.likeCount + 1 }, { new: true });
    
    res.json(updatedReview);
}


export default router;