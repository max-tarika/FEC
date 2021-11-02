/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext, useState } from 'react';

import Review from './Review.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

import AppContext from '../../context.js';
import ReviewsContext from './reviewsContext.js';

const axios = require('axios');

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [average, setAverage] = useState(0);

  const currentProduct = useContext(AppContext);

  const getReviewData = () => {
    const productID = currentProduct.currentProduct.id;
    axios({
      method: 'GET',
      url: `/reviews/meta/?product_id=${productID}`,
    })
      .then((res) => {
        setCurrentReview(res.data);
        let sum = 0;
        let count = 0;
        Object.keys(res.data.ratings).forEach((rating) => {
          sum += rating * res.data.ratings[rating];
          count += Number(res.data.ratings[rating]);
        });
        setAverage(Number((sum / count).toFixed(2)));
      });
  };

  const getReviewsForCurrent = () => {
    const productID = currentProduct.currentProduct.id;
    axios({
      method: 'GET',
      url: `/reviews/?product_id=${productID}`,
    })
      .then((res) => {
        setReviews(res.data.results);
      });
  };

  useEffect(() => {
    if (currentProduct.currentProduct.length < 1) { return; }
    getReviewData();
    getReviewsForCurrent();
  }, [currentProduct]);

  return (
    <ReviewsContext.Provider value={{
      currentReview, currentProduct, reviews, average,
    }}
    >
      <div id="widget">
        <h4>Ratings &amp; Reviews</h4>
        <div id="ratingsAndReviewsContainer">
          <div id="ratings">
            <RatingSummary />
            <RatingBreakdown />
            <ProductBreakdown />
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
              {reviews.map((review) => <Review data={review} />)}
            </div>
          </div>
        </div>
      </div>
    </ReviewsContext.Provider>
  );
};

export default Reviews;
