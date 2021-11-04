import React, { useContext, useEffect } from 'react';
import characteristics from './characteristics';
import RelatedContext from './context';

const Compare = () => {
  const current = null;
  const { showCompare } = useContext(RelatedContext);
  console.log('compare values ', showCompare);
  let a; let b; let c; let d; let e; let f; let g; let h; let i; let j; let k; const
    l = '';
  const checkCurrent = () => {
    console.log(characteristics);
  };

  useEffect(() => {
    console.log('use effect run');
  });
  if (showCompare) {
    return (
      <div id="comparisonModal">
        <table>
          <tr id="tableHeaders">
            <th>Current Product</th>
            <th>Characteristics</th>
            <th>Compare With...</th>
          </tr>
          <tr>
            <th>{a}</th>
            <th>GMO Free</th>
            <th>{b}</th>
          </tr>
          <tr>
            <th>{c}</th>
            <th>Fair Trade Certified</th>
            <th>{d}</th>
          </tr>
          <tr>
            <th>{e}</th>
            <th>Locally Sourced</th>
            <th>{f}</th>
          </tr>
          <tr>
            <th>{g}</th>
            <th>Made from Recycled Materials</th>
            <th>{h}</th>
          </tr>
          <tr>
            <th>{i}</th>
            <th>Contributes to Global Charities</th>
            <th>{j}</th>
          </tr>
          <tr>
            <th>{k}</th>
            <th>One Day Shipping</th>
            <th>{l}</th>
          </tr>
        </table>
      </div>
    );
  } return null;
};

export default Compare;
