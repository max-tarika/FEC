/* eslint-disable react/prop-types */
import React from 'react';

import Stars from './Stars.jsx';

const Review = (props) => {
  const currentReview = props.data;
  const { average } = props;

  return (
    <div id="review">
      <div id="reviewTopBar">
        <span className="currentReviewRating">
          <h3>{currentReview.rating}</h3>
          <Stars average={average} />
        </span>
        <div id="userAndDate">
          <h5>
            Posted by:
            {' '}
            <strong>{currentReview.reviewer_name}</strong>
            {' '}
            on
            {' '}
            <em>{currentReview.date.split('T')[0]}</em>
          </h5>
        </div>
      </div>
      <h1 id="reviewTitle">{currentReview.summary}</h1>
      <p id="reviewBody">
        <h3>{currentReview.body}</h3>
      </p>
      <div id="helpfulAndReport">
        <span className="helpfull">
          <h5>
            Was this review island worthy?
          </h5>

          <div id="markHelpfull">
            <strong>
              Yes
            </strong>
          </div>
          (
          {currentReview.helpfulness}
          )
        </span>
        <div id="reportReview">
          <h3>Report?</h3>
        </div>

      </div>
    </div>
  );
};

export default Review;
