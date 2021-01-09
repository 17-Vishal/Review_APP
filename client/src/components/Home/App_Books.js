
import React, { useState,useEffect }from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Reviews from '../Reviews/Reviews';
import Form from '../Form/Form';
import { getbooksReviews } from '../../actions/reviews';
// import { Link } from 'react-router';
import useStyles from './styles';
import movie from '../../images/movie.jpg';

const App_Movies = () => {
    const [currentId, setCurrentId] = useState(0);
    
    const classes = useStyles();
    const dispatch = useDispatch();

    var p = 1;
    useEffect(() => {
        dispatch(getbooksReviews());
      }, [currentId, dispatch]);

    return(
        <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Books
          {/* <Link to="/App copy">React</Link> */}
          </Typography>
        <img className={classes.image} src={movie} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Reviews setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form p={p} currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    )
}

export default App_Movies;