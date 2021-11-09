import React, { useState, useEffect, useContext } from 'react';
import RelatedContext from './context';
import Outfit from './Outfit.jsx';
import AppContext from '../../context';

const OutfitList = () => {
  const { outfit, productData } = useContext(RelatedContext);
  const { products } = useContext(AppContext);
  const [outfitStorage, setOutfitStorage] = useState([]);
  const store = [];

  useEffect(() => {
    if (outfitStorage.indexOf(outfit?.currentProduct?.id) === -1
    && outfit?.currentProduct?.id !== undefined) {
      if (outfitStorage.length > 0) {
        store.push(outfitStorage);
      }
      if (outfit.photo) {
        outfit.currentProduct.photo = outfit.photo;
      }
      if (!outfitStorage.some((obj) => obj.id === outfit?.currentProduct?.id)) {
        store.push(outfit?.currentProduct);
      }
    }
    const setter = store.flat();
    setOutfitStorage(setter);
  }, [outfit]);

  if (outfitStorage) {
    return (
      <div id="outfitContainer">
        {
        outfitStorage.map((product) => <div id="productCard"><Outfit key={product.id} id={product.id} product={product} /></div>)
      }
      </div>
    );
  }
  return null;
};

export default OutfitList;
