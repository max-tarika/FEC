/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useEffect, useContext, useState, useRef,
} from 'react';

import axios from 'axios';

import NewReview from './NewReview.jsx';

import Review from './Review.jsx';
import ReviewForm from './ReviewForm.jsx';
import RatingSummary from './RatingSummary.jsx';
import RecommendedBy from './RecommendedBy.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

import AppContext from '../../context.js';
import ReviewsContext from './reviewsContext.js';

const Reviews = () => {
  const reviewForm = useRef(null);

  const { currentProduct, average, currentReview } = useContext(AppContext);

  const [reviews, setReviews] = useState([]);

  const getReviewsForCurrent = (id) => {
    axios({
      method: 'GET',
      url: `/reviews/?product_id=${id}&sort=helpful&count=2`,
    })
      .then((res) => {
        setReviews(res.data.results);
      });
  };
  const getSelected = (string) => {
    const capital = string[0].toLowerCase();
    return capital + string.slice(1);
  };

  useEffect(() => {
    if (currentProduct?.length < 1) { return; }
    getReviewsForCurrent(currentProduct?.id);
  }, [currentProduct]);

  return (
    <>
      <ReviewsContext.Provider value={{
        currentReview, currentProduct, reviews, average,
      }}
      >
        <div id="reviewsWidget" className="widget">
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
                <h5>
                  Reviews sorted by:
                  {' '}
                  <select
                    name="reviewSort"
                    id="reviewSort"
                    onChange={(e) => {
                      const selected = getSelected(e.target.value);
                      axios({
                        method: 'GET',
                        url: `/reviews/?product_id=${currentProduct?.id}&sort=${selected}&count=25`,
                      })
                        .then((res) => {
                          setReviews(res.data.results);
                        });
                    }}
                  >
                    <option>---</option>
                    <option>Helpful</option>
                    <option>Newest</option>
                    <option>Relevant</option>
                  </select>
                </h5>
              </div>
              <div id="reviewList">
                {reviews.map((review) => <Review data={review} average={review.rating} />)}
              </div>
              <div id="addReview">
                <button
                  type="button"
                  className="addReview"
                  onClick={(e) => {
                    e.preventDefault();
                    reviewForm.current.open();
                  }}
                >
                  Add a Review

                </button>
              </div>
            </div>
          </div>
        </div>
      </ReviewsContext.Provider>
      <NewReview ref={reviewForm}>
        <ReviewForm />
      </NewReview>
    </>
  );
};

export default Reviews;
