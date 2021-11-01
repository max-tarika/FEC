/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext, useState } from 'react';

import Review from './Review.jsx';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

import AppContext from '../../context.js';

const axios = require('axios');

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState([]);

  const currentProduct = useContext(AppContext);

  // const getReview = () => {
  //   console.log(currentProduct);
  //   const productID = currentProduct.currentProduct[0].id;
  //   axios({
  //     method: 'GET',
  //     url: `/reviews/meta/?product_id=${productID}`,
  //   })
  //     .then((res) => {
  //       setCurrentReview(res.data);
  //     });
  // };

  // useEffect(() => {
  //   console.log('bang bang');
  //   getReview();
  // }, []);

  const averageRating = (currentRatings) => {
    let sum = 0;
    let totalRatings = 0;
    Object.keys(currentRatings.ratings).forEach((rating) => {
      sum += rating * currentRatings.ratings[rating];
      totalRatings += Number(currentRatings.ratings[rating]);
    });
    return sum / totalRatings;
  };

  return (
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
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                console.log('Current Product:', currentProduct);
                console.log('Average Rating:', averageRating(currentReview).toFixed(2));
              }}
            >
              currentProduct
            </button>
          </div>
          <div id="reviewList">
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
