/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Star from './Star.jsx';

const Stars = (props) => {
  const { average } = props;

  return (
    <div id="allStars">
      { [...new Array(5)].map((_, i) => <Star index={i} average={average} />)}
    </div>
  );
};

export default Stars;
