import React, { useContext } from 'react';
import OverviewContext from './context.js';
import Price from './Price.jsx';
import Share from './Share.jsx';

const Information = () => {
  const { productInfo } = useContext(OverviewContext);

  return (
  <section id="information">
    <h4>5 Stars Baby</h4>
    <h4>{productInfo.category}</h4>
    <h2>{productInfo.name}</h2>
    <Price />
    <Share />
  </section>
  )
}

export default Information;