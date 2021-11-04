/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useContext } from 'react';
<<<<<<< HEAD
=======
import HorizontalGallery from 'react-dynamic-carousel';
>>>>>>> 17953e6c32bb8017e31e882f29ef6d7583ab17cb
import RelatedContext from './context';
import ProductCard from './ProductCard.jsx';
import Compare from './Compare.jsx';

const RelatedList = () => {
  const { relatedIds, currentProduct } = useContext(RelatedContext);
  const [showCompare, setShowCompare] = useState(false);
  const [clickedItem, setClickedItem] = useState(0);

  useEffect(() => {

  }, [relatedIds]);

  const toggleCompare = (e, data) => {
    console.log('i got clicked ', e.target);
    setShowCompare(true);
    setClickedItem(e.target.id);
  };

  return (
<<<<<<< HEAD
    <div>
      <div id="productCardContainer">
        {
      relatedIds.map((id) => <div id="productCard" onClick={toggleCompare}><ProductCard key={id} id={id} /></div>)
      }
      </div>
      <RelatedContext.Provider value={{ showCompare, clickedItem, currentProduct }}>
        <div id="compareModal">
          <Compare />
        </div>
      </RelatedContext.Provider>
=======
    <div id="productCardContainer">
      <HorizontalGallery
        tiles={
      relatedIds.map((id) => <div id="productCard"><ProductCard key={id} id={id} /></div>)
}
        elementWidth={200}
        fadeDistance={100}
        minPadding={10}
      />
>>>>>>> 17953e6c32bb8017e31e882f29ef6d7583ab17cb
    </div>
  );
};

export default RelatedList;
