
import React, { useState,useEffect }from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';

import { Link } from "react-router-dom";

import movie from '../../images/movie.jpg';

const Home = () => {
    const classes = useStyles();
    const [type, settype] = useState("");
    return(
        <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Reviews!
          {/* <Link to="/App copy">React</Link> */}
          </Typography>
        <img className={classes.image} src={movie} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <h1>
                <Link to="/movies">Movies</Link>
                </h1>
            </Grid>
            <Grid item xs={12} sm={4}>
                <h1>
            <Link to="/books">Books</Link>
            </h1>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    )
}

export default Home;