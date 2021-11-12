/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Stars from './Stars.jsx';

const Review = (props) => {
  const currentReview = props.data;
  const { average } = props;

  const [marks, setMarks] = useState();
  const [total, setTotal] = useState();

  const markHelpful = (id) => {
    if (!marks) {
      axios.put(`/reviews/${id}/helpful`)
        .then((res) => console.log('Thanks for letting us know!', res))
        .then(setTotal(total + 1))
        .then(setMarks('marked'))
        .catch((err) => console.log(err));
    } else { alert('Already marked as helpful!!'); }
  };
  const reportReview = (id) => {
    axios.put(`/reviews/${id}/report`)
      .then((res) => console.log('Thanks for helping us keep the island clean!', res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!total) { setTotal(currentReview.helpfulness); }
  }, [currentReview.helpfulness]);

  if (!currentReview) {
    return (
      <div>Loading Review...</div>
    );
  }
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

      <h3 id="reviewBody">{currentReview.body}</h3>

      <div id="helpfulAndReport">
        <span className="helpfull">
          <h5>
            Was this review island worthy?
          </h5>

          <div
            id="markHelpfull"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              markHelpful(currentReview.review_id);
            }}
          >
            <strong>
              Yes
            </strong>
          </div>
          (
          {total}
          )
        </span>
        <div
          id="reportReview"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            reportReview(currentReview.review_id);
          }}
        >
          <h3>Report?</h3>
        </div>
      </div>
    </div>
  );
};

export default Review;
