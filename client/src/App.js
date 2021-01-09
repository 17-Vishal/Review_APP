import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

import home from "./components/Home/Home";
import movies from "./components/Home/App_Movies";
import books from "./components/Home/App_Books";
import NotFound from "./components/Home/NotFound";

const App =  () => {
    return(
        <Router>
            <Switch>
                <Route exact path = "/" component = {home} />
                <Route exact path = "/movies" component = {movies} />
                <Route exact path = "/books" component = {books} />
                <Route exact path = "/404" component = {NotFound} />
                <Redirect to = "/404" />
            </Switch>
        </Router>
    )
}
export default App;

// import React, { useState,useEffect }from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import { useDispatch } from 'react-redux';

// import Reviews from './components/Reviews/Reviews';
// import Form from './components/Form/Form';
// import { getReviews } from './actions/reviews';
// // import { Link } from 'react-router';
// import useStyles from './styles';
// import movie from './images/movie.jpg';

// const App = () => {
//     const [currentId, setCurrentId] = useState(0);
//     const classes = useStyles();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getReviews());
//       }, [currentId, dispatch]);

//     return(
//         <Container maxWidth="lg">
//       <AppBar className={classes.appBar} position="static" color="inherit">
//         <Typography className={classes.heading} variant="h2" align="center">
//           Movies
//           {/* <Link to="/App copy">React</Link> */}
//           </Typography>
//         <img className={classes.image} src={movie} alt="icon" height="60" />
//       </AppBar>
//       <Grow in>
//         <Container>
//           <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//             <Grid item xs={12} sm={7}>
//               <Reviews setCurrentId={setCurrentId}/>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Form  currentId={currentId} setCurrentId={setCurrentId}/>
//             </Grid>
//           </Grid>
//         </Container>
//       </Grow>
//     </Container>
//     )
// }

// export default App;