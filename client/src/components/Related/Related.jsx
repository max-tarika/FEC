import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context';
import RelatedContext from './context';
import ProductCard from './ProductCard.jsx';

const Related = () => {
  const [relatedIds, setRelatedID] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const currentProduct = useContext(AppContext);

  const relatedItems = () => {
    const productId = currentProduct.currentProduct.id;
    axios.get(`/products/${productId}/related`)
      .then((res) => {
        setRelatedID(res.data);
      });
  };

  const populateRelatedItems = () => {
    const results = [];

    for (let i = 0; i < relatedIds.length; i++) {
      axios.get(`/products/${relatedIds[i]}/`).then((res) => {
        results.push(res.data);
      });
    }
    setRelatedProducts(results);
  };

  useEffect(() => {
    relatedItems();
  }, [currentProduct]);

  useEffect(() => {
    populateRelatedItems();
  }, [relatedIds]);

  return (
    <div id="widget">
      <div>
        <RelatedContext.Provider value={{ relatedIds }}>
          <div id="relatedProductsContainer">
            <div id="relatedBar" />
            <div id="productCards">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </RelatedContext.Provider>
        <div id="yourOutFitContainer">
          <h4>Your Outfit</h4>
          <div id="outfitBar" />
          <div id="productCards">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Related;

// Related Items
// Horizontal list composed of product cards
// [P] [P] [P] [P] >
// Clicking card causes comparison Modal to pop up

// Outfit
// Horizontal list composed of product cards
// Add Item button on left
// [B] [P] [P] [P] >

// Need Product Card component
// Need list feild
// Need arrow buttons
