import React, { useEffect, useContext } from 'react';
import ReviewsContext from './reviewsContext.js';

import RatingBar from './RatingBar.jsx';

const RatingBreakdown = ({ ratings }) => {
  const context = useContext(ReviewsContext);

  useEffect(() => {
  }, [context]);

  return (
    <div id="ratingBreakdown">
      Rating Breakdown
      <RatingBar ratings={ratings} />
    </div>
  );
};

export default RatingBreakdown;
