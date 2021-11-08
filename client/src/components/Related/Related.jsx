import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../context';
import RelatedContext from './context';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';

const Related = () => {
  const currentProduct = useContext(AppContext);
  const { relatedProducts } = useContext(AppContext);
  const { relatedStyles } = useContext(AppContext);
  const [outfit, setOutfit] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const store = [];
    if (relatedStyles.length > 1) {
      for (let i = 0; i < relatedStyles.length; i += 1) {
        for (let j = 0; j < relatedStyles[i].results.length; j += 1) {
          if (relatedStyles[i].results[j]['default?'] === true) {
            store.push(relatedStyles[i].results[j].photos[0].thumbnail_url);
          }
        }
      }
      setPhotos(store);
    }
  }, [currentProduct, relatedStyles]);

  useEffect(() => {
    const store = [];
    if (photos.length > 1) {
      for (let i = 0; i < relatedProducts.length; i += 1) {
        if (!('photo' in relatedProducts[i])) {
          relatedProducts[i].photo = photos[i] || null;
        }
        store.push(relatedProducts[i]);
      }
      for (let i = 0; i < store.length - 1; i += 1) {
        let j = i + 1;
        if (store[i].id === store[j].id) {
          store.splice(i, 1);
        }
        j += 1;
      }
      setProductData(store);
    }
  }, [photos]);

  const addOutfitClick = () => {
    setOutfit(currentProduct);
  };

  return (
    <div className="widget">
      <div>
        <RelatedContext.Provider value={{
          productData, currentProduct, outfit,
        }}
        >

          <RelatedList />

          <div id="outfitContainer">
            <div id="addOutfit">
              <div id="addButton" onClick={addOutfitClick}>
                <br />
                +
                <br />
                <br />
                Add Outfit
              </div>
            </div>
            <OutfitList />
          </div>
        </RelatedContext.Provider>
      </div>
    </div>
  );
};
export default Related;
