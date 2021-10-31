import React from 'react';
import Review from './Review.jsx';

const Reviews = () => (
  <div>
    <h4>Ratings &amp; Reviews</h4>
    <div id="ratingsAndReviewsContainer">
      <div id="ratings">
        <div>Rating Summary Componenet Goes Here</div>
        <div>Rating Breakdown Component Goes Here</div>
        <div>Product Breakdown Component Goes Here</div>
      </div>
      <div id="reviews">
        <span># Reviews sorted by (dropdown \/)</span>
        <Review />
      </div>
    </div>
  </div>
);

export default Reviews;
