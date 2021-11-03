/* eslint-disable react/prop-types */
import React from 'react';
// import OverviewContext from './context.js';

const Feature = ({ feature }) => (
  <li className="feature">
    <span>
      {feature.feature}
      :
      {' '}
      {feature.value}
    </span>
  </li>
);

export default Feature;
