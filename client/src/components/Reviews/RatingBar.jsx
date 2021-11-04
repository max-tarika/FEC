import React, { useContext, useEffect } from 'react';
import AppContext from '../../context.js';

const RatingBar = (props) => {
  const context = useContext(AppContext);
  useEffect(() => {
    if (props.percent === null || props.percent === undefined || props.percent === 0 || isNaN(props.percent)) { }
  }, [context]);

  return (
    <div id="ratingBar">
      <div className="ratingBarFill" style={{ width: `${props?.percent}%` }} />
    </div>
  );
};

export default RatingBar;
