import React, { useContext, useEffect } from 'react';
import Stars from './Stars.jsx';
import ReviewsContext from './reviewsContext.js';

const RatingSummary = (props) => {
  const context = useContext(ReviewsContext);
  const { average } = props;

  useEffect(() => {
  }, [context]);

  return (
    <div id="ratingSummary">
      <h3>{context.average}</h3>
      <Stars average={average} />
    </div>
  );
};

export default RatingSummary;
