/* eslint-disable no-restricted-syntax */
import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../../context';
import RelatedContext from './context';

const Compare = () => {
  const { currentFeature, relatedProducts } = useContext(AppContext);
  const { showCompare, clickedItem } = useContext(RelatedContext);
  const [comparisonModal, setComparisonModal] = useState([]);
  const [compareItem, setCompareItem] = useState();

  useEffect(() => {
    for (const entry of relatedProducts) {
      if (entry.id === Number(clickedItem)) {
        setCompareItem(entry);
      }
    }
  }, [showCompare]);

  useEffect(() => {
    if (compareItem) {
      const store = [];
      const currentArray = currentFeature.features;
      const compareArray = compareItem?.features;
      let array = currentArray.concat(compareArray);
      array = [...new Set([...currentArray, ...compareArray])];
      for (const val of array) {
        const obj = {};
        if (val.value === null) {
          val.value = '';
        }
        if (val.feature === null) {
          val.feature = '';
        }
        const phrase = `${val.value} ${val.feature}`;
        if (currentArray.includes(val) && !compareArray.includes(val)) {
          obj.a = '√';
          obj.feat = phrase;
          obj.b = '';
        } else if (!currentArray.includes(val) && compareArray.includes(val)) {
          obj.a = '';
          obj.feat = phrase;
          obj.b = '√';
        } else if (currentArray.includes(val) && compareArray.includes(val)) {
          obj.a = '√';
          obj.feat = phrase;
          obj.b = '√';
        }
        store.push(obj);
      }
      setComparisonModal(store);
      console.log(store);
    }
  }, [compareItem]);

  if (showCompare && comparisonModal.length) {
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
          {comparisonModal.map((item) => (
            <div>
              <tr>
                <td>{item.a}</td>
                <td>{item.feat}</td>
                <td>{item.b}</td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    );
  } return null;
};

export default Compare;
