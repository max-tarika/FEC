/* eslint-disable no-restricted-syntax */
import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../../context';
import RelatedContext from './context';

const Compare = () => {
  const { currentFeature, relatedProducts } = useContext(AppContext);
  const { showCompare, clickedItem } = useContext(RelatedContext);
  const [comparisonModal, setComparisonModal] = useState([]);
  const [compareItem, setCompareItem] = useState('');

  useEffect(() => {
    for (const entry of relatedProducts) {
      if (entry.id === Number(clickedItem)) {
        setCompareItem(entry);
      }
    }
    const store = [];
    if (currentFeature && compareItem) {
      let { features } = currentFeature;
      for (let i = 0; i < features?.length; i += 1) {
        const obj = {};
        obj.a = '√';
        const key = features[i].feature;
        obj[key] = features[i].value;
        obj.b = '';
        store.push(obj);
      }
      features = compareItem;
      for (let i = 0; i < features?.length; i += 1) {
        const obj = {};
        obj.a = '';
        const key = features[i].feature;
        obj[key] = features[i].value;
        obj.b = '√';
        store.push(obj);
      }
    }
    setComparisonModal(store);
  }, [showCompare]);

  if (showCompare && compareItem) {
    return (
      <div id="comparisonModal">
        <table>
          <tr>
            <th>
              Comparing
              <br />
              {' '}
              {currentFeature.name}
            </th>
            <th>With</th>
            <th>{compareItem.name}</th>
          </tr>
        </table>
      </div>
    );
  } return null;
};

export default Compare;
