/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Star from './Star.jsx';

const Stars = (props) => (
  <div id="allStars">
    { [...new Array(5)].map((_, i) => <Star key={Math.random()} index={i} average={props?.average} />)}
  </div>
);

export default Stars;
