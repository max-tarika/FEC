import React from 'react';

import RatingBar from './RatingBar.jsx';

const RatingBarList = (props) => {
  const getPercent = (ratingCount) => Math.floor((ratingCount / props?.total) * 100);

  const getCountArray = (ratingObj) => Object.values(ratingObj);

  const matchIndex = (index) => {
    const starValues = [5, 4, 3, 2, 1];
    return starValues[index];
  };

  if (!props.ratings) {
    return (
      <h1>Loading Barz</h1>
    );
  }
  return (
    <div>
      {getCountArray(props?.ratings).map((rating, i) => (

        <h5>
          <strong>{matchIndex(i)}</strong>
          {' '}
          star(s):
          {' '}
          <RatingBar key={i} percent={getPercent(rating)} />
          {`${getPercent(rating)}% of reviewers`}
        </h5>
      ))}

    </div>
  );
};

export default RatingBarList;
