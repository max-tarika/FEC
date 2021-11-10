import React from 'react';
import Stars from './Stars.jsx';

const RatingSummary = ({average}) => (
  <div id="ratingSummary">
    <h3>{average}</h3>
    <Stars average={average} />
  </div>
);

export default RatingSummary;
