import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context';
import RelatedContext from './context';
import RelatedList from './RelatedList.jsx';

const Related = () => {
  const currentProduct = useContext(AppContext);
  const [relatedIds, setRelatedID] = useState([]);

  useEffect(() => {
    if (currentProduct.currentProduct.length === 0) { return; }
    const relatedItems = () => {
      const productId = currentProduct.currentProduct.id;
      if (currentProduct.currentProduct !== undefined) {
        axios.get(`/products/${productId}/related`)
          .then((res) => {
            setRelatedID(res.data);
          });
      }
    };
    relatedItems();
  }, [currentProduct]);

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
