/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import starOutline from '../../assets/starOutline.png';
import starFill from '../../assets/starFill.png';
import Star from './Star.jsx';
import ReviewsContext from './reviewsContext.js';

const Stars = (props) => {
  const context = ReviewsContext;

  const { average } = props;

  useEffect(() => {
  }, [context]);

  return (
    <div id="allStars">
      { [...new Array(5)].map((_, i) => <Star index={i} average={average} />)}
    </div>
  );
};

export default Stars;
