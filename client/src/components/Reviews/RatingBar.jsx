import React, { useContext, useEffect } from 'react';

const RatingBar = (props) => (
  <div id="ratingBar">
    <div className="ratingBarFill" style={{ width: `${props?.percent}%` }} />
  </div>
);

export default RatingBar;
