import React, { useContext } from 'react';
import OverviewContext from './context.js';

const Feature = ({ feature }) => {

  return (
    <li className="feature">
      <span>{feature.feature}: {feature.value}</span>
    </li>
  );
};

export default Feature;