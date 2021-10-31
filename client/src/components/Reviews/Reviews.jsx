/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Review from './Review.jsx';

const Reviews = () => (
  <div id="widget">
    <h4>Ratings &amp; Reviews</h4>
    <div id="ratingsAndReviewsContainer">
      <div id="ratings">
        <div>Rating Summary Componenet Goes Here</div>
        <div>Rating Breakdown Component Goes Here</div>
        <div>Product Breakdown Component Goes Here</div>
      </div>
      <div id="reviews">
        <div id="sortBar">
          <label htmlFor="reviewSort">Reviews sorted by:  </label>
          <select name="reviewSort" id="reviewSort">
            <option>Helpful</option>
            <option>Newest</option>
            <option>Relevant</option>
          </select>
        </div>
        <div id="reviewList">
          <Review />
        </div>
      </div>
    </div>
  </div>
);

export default Reviews;
