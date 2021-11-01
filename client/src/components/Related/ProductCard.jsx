import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';

const ProductCard = () => {
  const relatedIds = useContext(RelatedContext);
  const getRelated = () => {
    
  }

  return (
    <div>
      <div className="default_image" />
      <div className="product_info" />
      <div className="stars" />
    </div>
  );
};

export default ProductCard;
