import React, { useContext } from 'react';
import OverviewContext from './context.js';

const StyleSelector = () => {
  const { styles, currentStyle } = useContext(OverviewContext);

  console.log('----------------------------');
  console.log('styles: ', styles);
  console.log('current style: ', currentStyle);

  return (
    <h4>Style Selector</h4>
  );
};

export default StyleSelector;
