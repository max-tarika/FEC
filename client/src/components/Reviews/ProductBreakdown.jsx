import React, { useContext, useEffect } from 'react';

import ReviewsContext from './reviewsContext';

const ProductBreakdown = ({ characteristics }) => {
  const context = useContext(ReviewsContext);
  const comfortOffset = ((characteristics?.Comfort?.value) / 5) * 100;
  const fitOffset = ((characteristics?.Fit?.value) / 5) * 100;
  const lengthOffset = ((characteristics?.Length?.value) / 5) * 100;
  const qualityOffset = ((characteristics?.Quality?.value) / 5) * 100;

  useEffect(() => {
<<<<<<< HEAD
    // console.log(comfortOffset);
=======
>>>>>>> main
  }, [context]);
  return (
    <div id="productBreakdown">
      <p style={{ fontVariant: 'none' }}>Product Breakdown</p>
      <div id="comfortReview">
        Comfort
        <div className="ReviewBar">
          <span id="reviewBarFill" style={{ left: `${comfortOffset}%` }} />
        </div>
        <span id="productBreakdownDesc">
          <p>Ouch</p>
          <p>Snug-as-a-bug-in-a-rug</p>
        </span>
      </div>
      <div id="fitReview">
        Fit
        <div className="ReviewBar">
          <span id="reviewBarFill" style={{ left: `${fitOffset}%` }} />
        </div>
        <span id="productBreakdownDesc">
          <p>Too Small</p>
          <p>Perfect</p>
          <p>Too Large</p>
        </span>
      </div>
      <div id="lengthReview">
        Length
        <div className="ReviewBar">
          <span id="reviewBarFill" style={{ left: `${lengthOffset}%` }} />
        </div>
        <span id="productBreakdownDesc">
          <p>Poor</p>
          <p>Perfect</p>
        </span>
      </div>
      <div id="qualityReview">
        Quality
        <div className="ReviewBar">
          <span id="reviewBarFill" style={{ left: `${qualityOffset}%` }} />
        </div>
        <span id="productBreakdownDesc">
          <p>Poor</p>
          <p>Island Top Shelf</p>
        </span>
      </div>
    </div>
  );
};

export default ProductBreakdown;
