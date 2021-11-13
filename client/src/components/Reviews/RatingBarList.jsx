/* eslint-disable react/prop-types */
import React from 'react';

import Star from './Star.jsx';
import RatingBar from './RatingBar.jsx';

const RatingBarList = ({ ratings, total }) => {
  const getPercent = (ratingCount) => Math.floor((ratingCount / total) * 100);

  const getCountArray = (ratingObj) => Object.values(ratingObj);

  const matchIndex = (index) => {
    const starValues = [5, 4, 3, 2, 1];
    return starValues[index];
  };

  if (!ratings) {
    return (
      <h1>Loading Barz</h1>
    );
  }
  return (
    <div className="ratingBarList">
      {getCountArray(ratings).map((rating, i) => (
        <h5 className="ratingBarRow" key={Math.random()}>
          <span id="rowRow">
            <strong>{`${matchIndex(i)} `}</strong>
            <Star index={0} average={5} />
            <RatingBar key={Math.random()} percent={getPercent(rating)} />
          </span>
          <p className="percentOfReviewers">{`${getPercent(rating)}% of reviewers`}</p>
        </h5>
      ))}
    </div>
  );
};

export default RatingBarList;
