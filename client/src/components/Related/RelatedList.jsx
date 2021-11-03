/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';
import ProductCard from './ProductCard.jsx';

const RelatedList = () => {
  const { relatedIds } = useContext(RelatedContext);

  useEffect(() => {

  }, [relatedIds]);

  return (
    <div id="productCardContainer">
      {
      relatedIds.map((id, index) => <div id="productCard"><ProductCard key={index} id={id} /></div>)
}
    </div>
  );
};

export default RelatedList;
