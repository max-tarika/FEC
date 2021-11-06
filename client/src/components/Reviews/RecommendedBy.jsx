import React from 'react';

const RecommendedBy = ({ recommended }) => (
  <div id="recommendedBy">
    <h3>
      <strong>
        {Math.floor((recommended?.true + recommended?.false) / recommended?.true)}
        %

      </strong>
      {' '}
      of reviewers recommend this product.
    </h3>
  </div>
);

export default RecommendedBy;
