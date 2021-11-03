/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { AddToCartContext } from './context.js';

const SizeSelector = ({ sku }) => {
  const { handleSizeClick } = useContext(AddToCartContext);

  return (
    <option onClick={() => { handleSizeClick(e); }} value={sku.size}>{sku.size}</option>
  );
};

export default SizeSelector;
