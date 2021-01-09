
import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    title: String,
    check: String,
    review: String,
    creator: String,
    tags: [String], //array of string
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ReviewMessage = mongoose.model('ReviewMessage', reviewSchema);

export default ReviewMessage;