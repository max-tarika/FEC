import React, { useState, useEffect, useContext } from 'react';
import HorizontalGallery from 'react-dynamic-carousel';
import RelatedContext from './context';
import ProductCard from './ProductCard.jsx';

const RelatedList = () => {
  const { relatedIds } = useContext(RelatedContext);

  useEffect(() => {

  }, [relatedIds]);

  return (
    <div id="productCardContainer">
      <HorizontalGallery
        tiles={
      relatedIds.map((id) => <div id="productCard"><ProductCard key={id} id={id} /></div>)
}
        elementWidth={200}
        fadeDistance={100}
        minPadding={10}
      />
    </div>
  );
};

export default RelatedList;
