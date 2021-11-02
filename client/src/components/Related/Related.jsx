import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context';
import RelatedContext from './context';
import RelatedList from './RelatedList.jsx';

const Related = () => {
  const currentProduct = useContext(AppContext);
  const [relatedIds, setRelatedID] = useState([]);
  // const [relatedProducts, setRelatedProducts] = useState([]);
  // console.log('here we are ', relatedProducts);

  // const relatedItems = () => {
  //   const productId = currentProduct.currentProduct.id;
  //   if (currentProduct.currentProduct !== undefined) {
  //     axios.get(`/products/${productId}/related`)
  //       .then((res) => {
  //         setRelatedID(res.data);
  //       });
  //   }
  // };

  // const populateRelatedItems = () => {
  //   const results = [];
  //   if (relatedIds.length > 0) {
  //     for (let i = 0; i < relatedIds.length; i += 1) {
  //       axios.get(`/products/${relatedIds[i]}/`).then((res) => {
  //         results.push(res.data);
  //       });
  //     }
  //     setRelatedProducts(results);
  //   }
  // };

  useEffect(() => {
    // const results = [];
    if (currentProduct.currentProduct.length === 0) { return; }
    const relatedItems = () => {
      const productId = currentProduct.currentProduct.id;
      if (currentProduct.currentProduct !== undefined) {
        axios.get(`/products/${productId}/related`)
          .then((res) => {
            setRelatedID(res.data);
            // for (let i = 0; i < res.data.length; i += 1) {
            //   axios.get(`/products/${res.data[i]}/`).then((response) => {
            //     results.push(response.data);
            //   });
            // } setRelatedProducts(results);
          });
      }
    };
    relatedItems();
  }, [currentProduct]);
  console.log('current product ', currentProduct);
  console.log('related id ', relatedIds);

  // useEffect(() => {
  //   if (currentProduct.currentProduct.length === 0) { return; }
  //   const populateRelatedItems = () => {
  //     const results = [];
  //     if (relatedIds.length > 0) {
  //       for (let i = 0; i < relatedIds.length; i += 1) {
  //         axios.get(`/products/${relatedIds[i]}/`).then((res) => {
  //           results.push(res.data);
  //         });
  //       }
  //       setRelatedProducts(results);
  //     }
  //   };
  //   populateRelatedItems();
  // }, [relatedIds]);

  // useEffect(() => {
  //   console.log('hellloooo ', relatedProducts.length);
  // }, [relatedProducts]);

  return (
    <div>
      <div>
        <RelatedContext.Provider value={{ relatedIds }}>
          <div id="relatedProductsContainer">
            <RelatedList />
          </div>
          <div id="yourOutFitContainer">
            <h4>Your Outfit</h4>
            <div id="outfitBar" />
          </div>
        </RelatedContext.Provider>
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
