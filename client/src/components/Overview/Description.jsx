/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import OverviewContext from './context.js';
import Feature from './Features.jsx';

const Description = () => {
  const { productInfo } = useContext(OverviewContext);

  if (!productInfo?.features) {
    return null;
  }

  return (
    <div id="descriptionWrapper">
      <div id="description">
        <h3>{productInfo?.slogan}</h3>
        <p>{productInfo?.description}</p>
      </div>
      <div id="features">
        <ul>
          {productInfo?.features.map((feature, index) => <Feature feature={feature} key={index} />)}
        </ul>
      </div>
    </div>
  );
};

export default Description;
