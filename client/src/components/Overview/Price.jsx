import React, { useContext } from 'react';
import AppContext from '../../context.js';

const Price = () => {
  const { currentStyle } = useContext(AppContext);

  if (currentStyle.sale_price) {
    return (
      <div id="price">
        <div style={{ textDecoration: 'line-through' }}>
          $
          {currentStyle.original_price}
        </div>
        <div style={{ color: 'red' }}>
          $
          {currentStyle.sale_price}
        </div>
      </div>
    );
  }
  return (
    <div id="price">
      <div>
        $
        {currentStyle.original_price}
      </div>
    </div>
  );
};

export default Price;
