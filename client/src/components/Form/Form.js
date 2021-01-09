import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createReview, updateReview } from '../../actions/reviews';

const Form = ({ p, currentId, setCurrentId }) => {
    const [reviewData, setReviewData] = useState({ creator: '', title: '', review: '', tags: '', selectedFile: '' });
    const review = useSelector((state) => (currentId ? state.reviews.find((review) => review._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (review) setReviewData(review);
      }, [review]);

    const clear = () => {
      setCurrentId(0);
      setReviewData({ creator: '', title: '', review: '', tags: '', selectedFile: '' });
    };

   const handleSubmit = async (e) => {
        e.preventDefault();
        if(p===1)
            {
              reviewData.check="Book";
            }
            else
            {
              reviewData.check="Movie";
            }
        if (currentId === 0) {
            dispatch(createReview(reviewData));
            clear();
          } else {
            dispatch(updateReview(currentId, reviewData));
            clear();
          }
  };

  
    return (
      
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>     
                <Typography variant="h6">{currentId ? `Editing "${review.title}"` : 'Creating a Movie Review'}</Typography>
                {/* <TextField name="check" variant="outlined" label="check" fullWidth value={reviewData.check} onChange={(e) => setReviewData({ ...reviewData, check: e.target.value })} /> */}

                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={reviewData.creator} onChange={(e) => setReviewData({ ...reviewData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={reviewData.title} onChange={(e) => setReviewData({ ...reviewData, title: e.target.value })} />
                <TextField name="review" variant="outlined" label="Review" fullWidth multiline rows={4} value={reviewData.review} onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={reviewData.tags} onChange={(e) => setReviewData({ ...reviewData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setReviewData({ ...reviewData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;