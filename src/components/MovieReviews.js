// Code MovieReviews Here
//our MovieReviews component should be stateless and functional.
import React from 'react'

const MovieReviews = props => {
  const reviews = () => {
    return props.reviews.map(review => <div key={review.display_title} className="review">Title: {review.display_title}</div>)
  }

  return (
      <div className="review-list">
        {reviews()}
      </div>
    ) 
}

export default MovieReviews