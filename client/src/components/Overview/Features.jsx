/* eslint-disable react/prop-types */
import React from 'react';

const Feature = ({ feature }) => (
  <li className="feature">
    <span>
      {feature?.feature}
      :
      {' '}
      {feature?.value}
    </span>
  </li>
);

export default Feature;
