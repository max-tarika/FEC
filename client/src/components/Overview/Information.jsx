import React, { useContext } from 'react';
import { OverviewContext } from './context.js';
import Price from './Price.jsx';
import Share from './Share.jsx';

const Information = () => {
  const { productInfo } = useContext(OverviewContext);

  return (
    <div id="information">
      <div id="rating">5 Stars Baby</div>
      <div id="productCategory">{productInfo.category}</div>
      <div id="productName">{productInfo.name}</div>
      <Price />
      <Share />
    </div>
  );
};

export default Information;
