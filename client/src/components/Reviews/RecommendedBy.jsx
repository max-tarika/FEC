import React, { useEffect, useContext } from 'react';
import ReviewsContext from './reviewsContext.js';

const RecommendedBy = ({ recommended }) => (
  <div id="recommendedBy">
    <strong>
      {Math.floor((recommended?.true + recommended?.false) / recommended?.true)}
      %

    </strong>
    of reviewers recommend this product.
  </div>
);

export default RecommendedBy;
