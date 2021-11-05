import React, { useContext, useEffect } from 'react';
import characteristics from './characteristics';
import RelatedContext from './context';

const Compare = () => {
  const context = useContext(RelatedContext);
  const current = context.currentProduct.currentProduct.id;
  const related = context.clickedItem;
  let a; let A; let b; let B; let c; let C; let d; let D; let e; let E; let f; let F;

  useEffect(() => {

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
