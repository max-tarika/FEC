import React, { useContext, useEffect, useState } from 'react';

import ReviewsContext from './reviewsContext.js';
import RatingBar from './RatingBar.jsx';

const RatingBarList = (props) => {
  const context = useContext(ReviewsContext);

  const [percent5, setPercent5] = useState(0);
  const [percent4, setPercent4] = useState(0);
  const [percent3, setPercent3] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const [percent1, setPercent1] = useState(0);

  useEffect(() => {
    if (context.currentProduct?.length < 1) { return; }
    if (props.total === null || props.total === undefined) { return; }

    setPercent5(Math.floor((props.ratings['5'] / props.total) * 100));
    setPercent4(Math.floor((props.ratings['4'] / props.total) * 100));
    setPercent3(Math.floor((props.ratings['3'] / props.total) * 100));
    setPercent2(Math.floor((props.ratings['2'] / props.total) * 100));
    setPercent1(Math.floor((props.ratings['1'] / props.total) * 100));
  }, [context]);

  return (
    <div>
      <h5>
        5 stars:
        {' '}
        <RatingBar percent={percent5} />
        {`${percent5}% of reviewers`}
      </h5>
      <h5>
        4 stars:
        {' '}
        <RatingBar percent={percent4} />
        {`${percent4}% of reviewers`}
      </h5>
      <h5>
        3 stars:
        {' '}
        <RatingBar percent={percent3} />
        {`${percent3}% of reviewers`}
      </h5>
      <h5>
        2 stars:
        {' '}
        <RatingBar percent={percent2} />
        {`${percent2}% of reviewers`}
      </h5>
      <h5>
        1 star:
        {' '}
        <RatingBar percent={percent1} />
        {`${percent1}% of reviewers`}
      </h5>
    </div>
  );
};

export default RatingBarList;
