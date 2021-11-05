import React, { useContext, useEffect } from 'react';
import characteristics from './characteristics';
import RelatedContext from './context';

const Compare = () => {
  const context = useContext(RelatedContext);
  const current = context.currentProduct.currentProduct.id;
  const related = context.clickedItem;
  let a; let A; let b; let B; let c; let C; let d; let D; let e; let E; let f; let F;
  let index = -1;
  const checkCurrent = () => {
    for (let i = 0; i < characteristics.length; i += 1) {
      if (characteristics[i].id === current) {
        index = i;
      }
    }
    const char = characteristics[index];
    if (char?.gmo === true) {
      a = '√';
    }
    if (char?.fairTrade === true) {
      b = '√';
    }
    if (char?.local === true) {
      c = '√';
    }
    if (char?.recycled === true) {
      d = '√';
    }
    if (char?.charity === true) {
      e = '√';
    }
    if (char?.oneDay === true) {
      f = '√';
    }
  };

  const checkRelated = () => {
    const index = characteristics.indexOf(related);
    const char = characteristics[index];
    if (char?.gmo === true) {
      A = '√';
    }
    if (char?.fairTrade === true) {
      B = '√';
    }
    if (char?.local === true) {
      C = '√';
    }
    if (char?.recycled === true) {
      D = '√';
    }
    if (char?.charity === true) {
      E = '√';
    }
    if (char?.oneDay === true) {
      F = '√';
    }
  };

  useEffect(() => {
    checkCurrent();
    checkRelated();
  }, [related]);

  if (context.showCompare) {
    return (
      <div id="comparisonModal">
        <table>
          <thead id="tableHeaders">
            <th>Current Product</th>
            <th>Characteristics</th>
            <th>Compare With...</th>
          </thead>
          <tbody>
            <th>{a}</th>
            <th>GMO Free</th>
            <th>{A}</th>
          </tbody>
          <tbody>
            <th>{b}</th>
            <th>Fair Trade Certified</th>
            <th>{B}</th>
          </tbody>
          <tbody>
            <th>{c}</th>
            <th>Locally Sourced</th>
            <th>{C}</th>
          </tbody>
          <tbody>
            <th>{d}</th>
            <th>Made from Recycled Materials</th>
            <th>{D}</th>
          </tbody>
          <tbody>
            <th>{e}</th>
            <th>Contributes to Global Charities</th>
            <th>{E}</th>
          </tbody>
          <tbody>
            <th>{f}</th>
            <th>One Day Shipping</th>
            <th>{F}</th>
          </tbody>
        </table>
      </div>
    );
  } return null;
};

export default Compare;
