import React, { useState, useEffect, useContext } from 'react';
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
    </div>
  );
};

export default RelatedList;
