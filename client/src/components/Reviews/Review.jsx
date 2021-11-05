/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react';
import AppContext from '../../context.js';

import Stars from './Stars.jsx';

const Review = (props) => {
  const context = useContext(AppContext);
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
          <h5>
            Posted by:
            {' '}
            <strong>{currentReview.reviewer_name}</strong>
            {' '}
            on
            {' '}
            <em>{currentReview.date}</em>
          </h5>
        </div>
      </div>
      <h3 id="reviewTitle">{currentReview.summary}</h3>
      <p id="reviewBody">
        {currentReview.body}
      </p>
      <div id="helpfulAndReport">

        <h5>
          Was this review island worthy?
          {' '}
          <strong>Yes</strong>
          {' '}
          (
          {currentReview.helpfulness}
          )
          {' '}
          Report?
        </h5>
      </div>
    </div>
  );
};

export default Review;
