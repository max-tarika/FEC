import React, { useState, useContext, useEffect } from 'react';
import { ContextExclusionPlugin } from 'webpack';
import AppContext from '../../context';
import characteristics from './characteristics';
import RelatedContext from './context';

const Compare = () => {
  const { currentFeature, relatedProducts } = useContext(AppContext);
  const { showCompare, clickedItem } = useContext(RelatedContext);
  const [comparisonModal, setComparisonModal] = useState([]);

  useEffect(() => {
    for (const entry of relatedProducts) {
      console.log('entry ', entry);
      if (Number(entry.id) === clickedItem) {
        let compareItem = entry;
        console.log('compare item, ', compareItem);
      }
    }
  }, [clickedItem]);

  if (showCompare) {
    return (
      <div id="comparisonModal" />
    );
  } return null;
};

export default Compare;
