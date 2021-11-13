/* eslint-disable react/prop-types */
import React from 'react';

const RatingBar = ({ percent }) => (
  <div id="ratingBar">
    <div className="ratingBarFill" style={{ width: `${percent}%` }} />
  </div>
);

export default RatingBar;
