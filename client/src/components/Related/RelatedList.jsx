/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useContext } from 'react';
import HorizontalGallery from 'react-dynamic-carousel';
import RelatedContext from './context';
import ProductCard from './ProductCard.jsx';
import Compare from './Compare.jsx';

const RelatedList = () => {
  const { productData, currentProduct } = useContext(RelatedContext);
  const [showCompare, setShowCompare] = useState(false);
  const [clickedItem, setClickedItem] = useState(0);

  useEffect(() => {
  }, [productData]);

  const toggleCompare = (e, data) => {
    if (!showCompare) {
      setShowCompare(true);
    } else if (showCompare) {
      setShowCompare(false);
    }
    setClickedItem(e.target.id);
  };

  return (
    <div>
      <RelatedContext.Provider value={{
        currentProduct, clickedItem, showCompare, productData,
      }}
      >
        <div id="productCardContainer">
          <HorizontalGallery
            tiles={
              productData.map((product) => <div id="productCard" onClick={toggleCompare}><ProductCard key={product.id} product={product} /></div>)
}
            elementWidth={165}
            fadeDistance={100}
            minPadding={10}
          />
        </div>

        <div>
          <Compare />
        </div>
      </RelatedContext.Provider>
    </div>
  );
};

export default RelatedList;
