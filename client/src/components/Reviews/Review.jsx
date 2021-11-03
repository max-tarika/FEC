/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react';

import Stars from './Stars.jsx';
import ReviewsContext from './reviewsContext.js';

const Review = (props) => {
  const context = useContext(ReviewsContext);
  const currentReview = props.data;
  const { average } = props;

  useEffect(() => {
  }, [context]);

  return (
    <div id="review">
      <div id="reviewTopBar">
        <h3>{currentReview.rating}</h3>
        <Stars average={average} />
        <div id="userAndDate">
          'Posted by:
          {' '}
          <strong>{currentReview.reviewer_name}</strong>
          {' '}
          on
          {' '}
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
      </div>
    </div>
  );
};

export default Review;
