/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import starOutline from '../../assets/starOutline.png';
import starFill from '../../assets/starFill.png';

import ReviewsContext from './reviewsContext.js';

const Star = ({ index, average }) => (
  <div className="starWrapper">
    <img src={starOutline} className="outerStar" />
    <div className="innerStar" style={{ width: average >= index + 1 ? '100%' : `${((average - Math.floor(average))) * 100}%` }}>
      <img src={starFill} />
    </div>
  </div>
);

const Stars = (props) => {
  const context = ReviewsContext;

  const { average } = props;

  useEffect(() => {
    // fillStars();
  }, [context]);

  return (
    <div id="allStars">
      { [...new Array(5)].map((_, i) => <Star index={i} average={average} />)}
    </div>
  );
};

export default Stars;
