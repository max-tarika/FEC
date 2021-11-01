import React, { useContext, useEffect } from 'react';
import Stars from './Stars.jsx';
import ReviewsContext from './reviewsContext.js';

const RatingSummary = () => {
  const context = useContext(ReviewsContext);

  useEffect(() => {

  }, [context]);

  return (
    <div id="ratingSummary">
      <h3>{context.average}</h3>
      <Stars />
    </div>
  );
};

export default RatingSummary;
