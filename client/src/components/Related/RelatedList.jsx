import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';
import ProductCard from './ProductCard.jsx';

const RelatedList = () => {
  const { relatedIds } = useContext(RelatedContext);

  // console.log(props.data);

  useEffect(() => {

  }, [relatedIds]);

  return (
    <div id="productCardContainer">{relatedIds.map((id) => <div id="productCard"><ProductCard key={id} id={id} /></div>)}</div>

  );
};

export default RelatedList;
