import React, { useState, useEffect, useContext } from 'react';
import RelatedContext from './context';
import Outfit from './Outfit.jsx';
import AppContext from '../../context';

const OutfitList = () => {
  const { outfit, productData } = useContext(RelatedContext);
  const { products } = useContext(AppContext);
  const [outfitStorage, setOutfitStorage] = useState([]);
  const [count, setCount] = useState(0);
  const store = [];

  useEffect(() => {
    if (outfitStorage.indexOf(outfit?.currentProduct?.id) === -1
    && outfit?.currentProduct?.id !== undefined) {
      if (outfitStorage.length > 0) {
        store.push(outfitStorage);
      }
      if (outfit.photo && !outfit.currentProduct.photo) {
        outfit.currentProduct.photo = outfit.photo;
      }
      if (!outfitStorage.some((obj) => obj.id === outfit?.currentProduct?.id)) {
        store.push(outfit?.currentProduct);
      }
    }
    const setter = store.flat();
    setOutfitStorage(setter);
  }, [outfit]);

  const removeEntry = (id) => {
    for (let i = 0; i < outfitStorage.length; i += 1) {
      if (outfitStorage[i].id === id) {
        outfitStorage.splice(i, 1);
        setOutfitStorage(outfitStorage);
        setCount(count + 1);
      }
    }
  };

  useEffect(() => {
  }, [count]);

  if (outfitStorage) {
    return (
      <div id="outfitContainer">
        {
        outfitStorage.map((product) => (
          <div id="productCard">
            <Outfit key={product.id} removeEntry={removeEntry} id={product.id} product={product} />
          </div>

        ))
      }
      </div>
    );
  }
  return null;
};

export default OutfitList;
