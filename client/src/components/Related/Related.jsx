import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context';
import RelatedContext from './context';

const Related = () => {
  const [related, setRelated] = useState([]);
  const [current, setCurrent] = useState([]);
  const currentProduct = useContext(AppContext);
  console.log('Current in Related: ', currentProduct);
  console.log('related: ', related);

  const relatedItems = () => {
    const productId = currentProduct.currentProduct.id;
    console.log('id:', productId);
    axios.get(`/products/${productId}/related`)
      .then((res) => {
        console.log('data: ', res.data);
        setRelated(res.data);
      });
  };

  useEffect(() => {
    relatedItems();
  }, [currentProduct]);

  return (
    <div>
      <RelatedContext.Provider value={{ related }}>
        <h4>Related Products</h4>
      </RelatedContext.Provider>
      <h4>Your Outfit</h4>
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
