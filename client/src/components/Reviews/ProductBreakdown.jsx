import React, { useContext, useEffect } from 'react';

import ReviewsContext from './reviewsContext';

const ProductBreakdown = ({ characteristics }) => {
  const context = useContext(ReviewsContext);
  const comfortOffset = (characteristics?.Comfort?.value) / 5;

  useEffect(() => {
    console.log(comfortOffset);
  }, [context]);
  return (
    <div id="productBreakdown">
      <div id="comfortReview">
        Comfort
        <div id="comfortReviewBar" />
        <span id="productBreakdownDesc">
          <p>Ouch</p>
          <p>Snug-as-a-bug-in-a-rug</p>
        </span>
      </div>
      <div id="fitReview">
        Fit
        <div id="fitReviewBar">
          <span id="reviewBarFill" />
        </div>
        <span id="productBreakdownDesc">
          <p>Too Small</p>
          <p>Perfect</p>
          <p>Too Large</p>
        </span>
      </div>
      <div id="lengthReview">
        Length
        <div id="lengthReviewBar" />
        <span id="productBreakdownDesc">
          <p>Poor</p>
          <p>Perfect</p>
        </span>
      </div>
      <div id="qualityReview">
        Quality
        <div id="qualityReviewBar" />
        <span id="productBreakdownDesc">
          <p>Poor</p>
          <p>Island Top Shelf</p>
        </span>
      </div>
    </div>
  );
};

export default ProductBreakdown;
