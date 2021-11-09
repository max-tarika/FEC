import React, { useEffect, useContext } from 'react';
import AppContext from '../../context.js';

const BreakdownBar = (props) => {
  const { characteristic } = props;

  const context = useContext(AppContext);
  const { currentProduct } = context;
  const { characteristics } = context.currentReview;

  const calcOffset = (num) => (num / props.total) * 100;

  if (!characteristics) return (<h3>Loading...</h3>);

  return (
    <div id="breakdownBar">
      <div id={characteristic}>
        {characteristic}
        <div className="ReviewBar">
          <span id="reviewBarFill" style={{ left: `${calcOffset(characteristics[characteristic]?.value)}%` }} />
        </div>
        <span id="productBreakdownDesc">
          <p>Beach Bob</p>
          <p>-</p>
          <p>Island Top Shelf</p>
        </span>
      </div>
    </div>
  );
};

export default BreakdownBar;
