import React, { useContext, useEffect } from 'react';
import { OverviewContext } from './context.js';
import AppContext from '../../context.js';
import Stars from '../Reviews/Stars.jsx';
import Price from './Price.jsx';
import Share from './Share.jsx';

const Information = () => {
  const { productInfo } = useContext(OverviewContext);
  const { average } = useContext(AppContext);

  useEffect(() => {
  }, [average]);
  return (
    <div id="information">
      <Stars average={average} />
      <div id="productCategory">{productInfo.category}</div>
      <div id="productName">{productInfo.name}</div>
      <Price />
      <Share />
    </div>
  );
};

export default Information;
