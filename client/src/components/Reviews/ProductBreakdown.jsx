import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context.js';
import BreakdownBar from './BreakdownBar.jsx';

const ProductBreakdown = () => {
  const { currentProduct, currentReview } = useContext(AppContext);

  const [chars, setChars] = useState();

  useEffect(() => {
    if (!currentReview.characteristics) { return; }
    setChars(Object.keys(currentReview.characteristics));
  }, [currentReview]);

  if (!chars) { return (<h1>Loading characteristics</h1>); }

  return (
    <div id="productBreakdown">
      <p style={{ fontVariant: 'none' }}>Product Breakdown</p>

      {chars?.map((charKey, index) => <BreakdownBar key={index} characteristic={charKey} offset={currentReview.characteristics.charKey?.value} />)}

    </div>
  );
};

export default ProductBreakdown;
