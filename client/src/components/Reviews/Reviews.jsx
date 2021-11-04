/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import Review from './Review.jsx';
import RatingSummary from './RatingSummary.jsx';
import RecommendedBy from './RecommendedBy.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

import AppContext from '../../context.js';
import ReviewsContext from './reviewsContext.js';

const Reviews = () => {
  const context = useContext(AppContext);
  const { currentProduct } = context;
  const { average } = context;
  const { currentReview } = context;

  const [reviews, setReviews] = useState([]);

  const getReviewsForCurrent = () => {
    const productID = context.currentProduct?.id;
    axios({
      method: 'GET',
      url: `/reviews/?product_id=${productID}`,
    })
      .then((res) => {
        setReviews(res.data.results);
      });
  };

  useEffect(() => {
    if (context.currentProduct?.length < 1) { return; }
    getReviewsForCurrent();
  }, [context]);

  return (
    <ReviewsContext.Provider value={{
      currentReview, currentProduct, reviews, average,
    }}
    >
      <div id="widget">
        <h4>Ratings &amp; Reviews</h4>
        <div id="ratingsAndReviewsContainer">
          <div id="ratings">
            <RatingSummary average={average} />
            <RecommendedBy recommended={currentReview.recommended} />
            <RatingBreakdown ratings={currentReview.ratings} />
            <ProductBreakdown characteristics={currentReview.characteristics} />
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
              {reviews.map((review) => <Review data={review} average={review.rating} />)}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                console.log('This button will open form to submit a review', currentProduct);
              }}
            >
              Add a Review

            </button>
          </div>
        </div>
      </div>
    </ReviewsContext.Provider>
  );
};

export default Reviews;
