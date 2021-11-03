/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { AddToCartContext } from './context.js';

const SizeSelector = ({ sku }) => {
  const { handleStyleClick } = useContext(AddToCartContext);

  return (
    <option onClick={() => { handleStyleClick(e); }} value={sku.size}>{sku.size}</option>
  );
};

export default SizeSelector;
