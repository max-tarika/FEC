import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';
import Outfit from './Outfit.jsx';

const OutfitList = () => {
  const { outfit } = useContext(RelatedContext);
  const outfitStorage = [];

<<<<<<< HEAD
  if (!outfitStorage.includes(outfit?.currentProduct?.id)) {
    outfitStorage.push(outfit.currentProduct);
    // console.log(outfitStorage);
  } else {
    // console.log('That Item is Already in your Outfit!');
=======
  if (!outfitStorage.includes(outfit?.currentProduct?.id)
      && outfit?.currentProduct?.id !== undefined) {
    outfitStorage.push(outfit?.currentProduct?.id);
>>>>>>> main
  }
  useEffect(() => {

  }, [outfit]);

  return (
    <div>
      {
        outfitStorage.map((id) => <div id="outfitCard"><Outfit key={id} id={id} /></div>)
      }
    </div>
  );
};

export default OutfitList;
