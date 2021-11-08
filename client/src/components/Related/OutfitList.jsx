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
    if (!outfitStorage.includes(outfit?.currentProduct?.id)
    && outfit?.currentProduct?.id !== undefined) {
      if (outfitStorage.length > 0) {
        store.push(outfitStorage);
      }
      store.push(outfit?.currentProduct?.id);
    }
    const setter = store.flat();
    setOutfitStorage(setter);
  }, [outfit]);

  if (outfitStorage) {
    return (
      <div id="outfitContainer">
        {
        outfitStorage.map((id) => <div id="productCard"><Outfit key={id} id={id} /></div>)
      }
      </div>
    );
  }
  return null;
};

export default OutfitList;
