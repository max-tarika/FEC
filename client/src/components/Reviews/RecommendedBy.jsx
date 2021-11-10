import React from 'react';

const RecommendedBy = ({ recommended }) => {
  if (!recommended) {return (<h1>Fetching data waves...</h1>)}
return (
  <div id="recommendedBy" onClick={(e) => {
    e.preventDefault();
    console.log(recommended)
  }}>
    <h3>
      <strong>
        {Math.floor((Number(recommended.true) + Number(recommended.false)) / Number(recommended.true))}
        %

      </strong>
      {' '}
      of reviewers recommend this product.
    </h3>
  </div>
);
}

export default RecommendedBy;
