import React, { useEffect, useContext, useState } from 'react';
import ReviewsContext from './reviewsContext.js';

import RatingBarList from './RatingBarList.jsx';

const RatingBreakdown = (props) => {
  // const context = useContext(ReviewsContext);

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
  useEffect(() => {
    if (!props.ratings) { }
  }, [props]);

  return (
    <div id="ratingBreakdown">
      Rating Breakdown
      <RatingBarList ratings={props?.ratings} total={getTotal(props?.ratings)} />
    </div>
  );
};

export default RatingBreakdown;
