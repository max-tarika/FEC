import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';
import Outfit from './Outfit.jsx';

const OutfitList = () => {
  const { outfit } = useContext(RelatedContext);
  const outfitStorage = [];

  if (!outfitStorage.includes(outfit?.currentProduct?.id)) {
    outfitStorage.push(outfit.currentProduct);
    console.log(outfitStorage);
  } else {
    console.log('That Item is Already in your Outfit!');
  }
  useEffect(() => {

  }, [outfit]);

  return (

    <div />
  );
};

export default OutfitList;
