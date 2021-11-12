/* eslint-disable max-len */
import React, { useContext } from 'react';
import OverviewContext from './context.js';
import AppContext from '../../context.js';
import Stars from '../Reviews/Stars.jsx';
import Price from './Price.jsx';
import Share from './Share.jsx';

const Information = () => {
  const { productInfo } = useContext(OverviewContext);
  const { average } = useContext(AppContext);
  const { totalReviews } = useContext(AppContext);

  return (
    <div id="information">
      <div className="rating">
        <Stars average={average} />
        <span>
          <a href="#reviewsWidget" className="readReviewsText">
            Read All
            {' '}
            {totalReviews}
            {' '}
            Reviews
          </a>
        </span>
      </div>
      <div id="productCategory">{productInfo.category}</div>
      <div id="productName">{productInfo.name}</div>
      <Price />
      <Share />
    </div>
  );
};

export default Information;
