import React from 'react';
import Stars from './Stars.jsx';

const RatingSummary = (props) => (
  <div id="ratingSummary">
    <h3>{props.average}</h3>
    <Stars average={props.average} />
  </div>
);

export default RatingSummary;
