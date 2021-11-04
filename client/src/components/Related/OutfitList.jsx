import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';
import Outfit from './Outfit.jsx';

const OutfitList = () => {
  const { outfit } = useContext(RelatedContext);
  const outfitStorage = [];

  if (!outfitStorage.includes(outfit?.currentProduct?.id)
      && outfit?.currentProduct?.id !== undefined) {
    outfitStorage.push(outfit?.currentProduct?.id);
  }
  useEffect(() => {

  }, [outfit]);

  return (
    <div>
      {
        outfitStorage.map((id) => <div id="productCard"><Outfit key={id} id={id} /></div>)
      }
    </div>
  );
};

export default OutfitList;
