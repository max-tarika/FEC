/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Star from './Star.jsx';

const Stars = ({ average }) => (
  <div id="allStars">
    { [...new Array(5)].map((_, i) => <Star key={Math.random()} index={i} average={average} />)}
  </div>
);

export default Stars;
