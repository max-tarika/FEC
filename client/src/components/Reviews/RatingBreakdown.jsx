/* eslint-disable react/prop-types */
import React from 'react';
import RatingBarList from './RatingBarList.jsx';

const RatingBreakdown = ({ ratings }) => {
  const getTotal = (ratingObj) => {
    let total = 0;
    if (ratingObj === null || ratingObj === undefined) {
      return;
    }
    Object.values(ratingObj).forEach((count) => {
      total += Number(count);
    });
    return total;
  };

  return (
    <div id="ratingBreakdown">
      <h5>
        <strong>Rating Breakdown: </strong>
        <em>{`(out of ${getTotal(ratings)} reviews)`}</em>
      </h5>

      <RatingBarList key={Math.random()} ratings={ratings} total={getTotal(ratings)} />
    </div>
  );
};

export default RatingBreakdown;
