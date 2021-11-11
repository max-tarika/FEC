/* eslint-disable no-restricted-syntax */
import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../../context';
import RelatedContext from './context';

const Compare = () => {
  const { currentFeature, relatedProducts } = useContext(AppContext);
  const { showCompare, clickedItem, toggleCompare } = useContext(RelatedContext);
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
        obj = {};
        obj.a = '';
        obj.b = phrase;
        obj.c = '';
        obj.val = val.value;
        obj.feat = val.feature;
        store.push(obj);
      }
      for (const obj of store) {
        for (const prop of currentArray) {
          if (prop.value === obj.val || prop.feature === obj.feat) {
            obj.a = '√';
          }
        }
        for (const prop of compareArray) {
          if (prop.value === obj.val || prop.feature === obj.feat) {
            obj.c = '√';
          }
        }
      }
      setComparisonModal(store);
    }
  }, [compareItem]);

  if (showCompare && comparisonModal.length) {
    return (
      <div id="comparisonModal">
        <table onClick={toggleCompare}>
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
            <div className="tableRow">
              <tr>
                <td className="tableCell">{item.a}</td>
                <td className="tableCell">{item.b}</td>
                <td className="tableCell">{item.c}</td>
              </tr>
            </div>
          ))}
        </table>
      </div>
    );
  } return null;
};

export default Compare;
