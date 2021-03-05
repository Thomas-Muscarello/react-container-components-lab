import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {
      reviews: []
    }
  
    fetchMovieReviews = () => {
      fetch(URL)
      .then(data => data.json())
      .then(reviews => {
        const firstThree = reviews.results.splice(0,3)
        this.setState({ reviews: firstThree })
      })
    }
  
    componentDidMount() {
      this.fetchMovieReviews()
    }
  
    render() {
      return ( 
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
  }
  
  export default LatestMovieReviewsContainer