import React, { useContext, useEffect } from 'react';

import ReviewsContext from './reviewsContext.js';

const RatingBar = ({ ratings }) => {
  const context = useContext(ReviewsContext);

  useEffect(() => {
  }, [context]);

  return (
    <div>
      <h5>
        5 stars:
        {' '}
        {ratings?.[5]}
      </h5>
      <h5>
        4 stars:
        {' '}
        {ratings?.[4]}
      </h5>
      <h5>
        3 stars:
        {' '}
        {ratings?.[3]}
      </h5>

      <h5>
        2 stars:
        {' '}
        {ratings?.[2]}
      </h5>

      <h5>
        1 star:
        {' '}
        {ratings?.[1]}
      </h5>

    </div>
  );
};

export default RatingBar;
