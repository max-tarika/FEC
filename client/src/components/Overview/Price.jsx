import React, { useContext } from 'react';
import AppContext from '../../context.js';

const Price = () => {
  const { currentStyle } = useContext(AppContext);
  const saleStyles = currentStyle?.sale_price ? { textDecoration: 'line-through' } : null;

  return (
    <div id="price">
      <div style={saleStyles}>
        $
        {currentStyle?.original_price}
      </div>
      {currentStyle?.sale_price
      && (
      <div style={{ color: 'red', paddingLeft: '5px' }}>
        $
        {currentStyle?.sale_price}
      </div>
      )}
    </div>
  );
};

export default Price;
