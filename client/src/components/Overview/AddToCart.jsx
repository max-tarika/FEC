import React, { useContext } from 'react';
import OverviewContext from './context.js';

const AddToCart = () => {
  const { currentStyle } = useContext(OverviewContext);

  return (
    <h4>Add to Cart</h4>
  );
};

export default AddToCart;
