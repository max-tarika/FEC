import React, { useEffect, useContext, useState } from 'react';

import Stars from './Stars.jsx';
import ReviewsContext from './reviewsContext.js';

const Review = (props) => {
  const context = useContext(ReviewsContext);
  const [review, setReview] = useState([]);
  const currentReview = props.data;

  useEffect(() => {
    if (context.reviews.length === 0) {
      return;
    }
    setReview(context.reviews[0]);
  }, [context]);

  return (
    <div id="review">
      <div id="reviewTopBar">
        <h3>{currentReview.rating}</h3>
        <Stars />
        <div id="userAndDate">
          {'Posted by: '}
          <strong>{currentReview.reviewer_name}</strong>
          {' on '}
          <em>{currentReview.date}</em>
        </div>
      </div>
      <h3 id="reviewTitle">{currentReview.summary}</h3>
      <p id="reviewBody">
        {currentReview.body}
      </p>
      <div id="helpfulAndReport">
        <p>Was this review island worthy, mon?</p>
        <ul>
          <li>
            Yes (
            {currentReview.helpfulness}
            )
          </li>

          <li>
            Report
          </li>
        </ul>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            console.log(context);
          }}
        >
          Test
        </button>
      </div>
    </div>
  );
};

export default Review;
