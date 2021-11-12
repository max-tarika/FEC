/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import OverviewContext from './context.js';
import Feature from './Features.jsx';

const Description = () => {
  const { productInfo } = useContext(OverviewContext);

  return (
    <div id="descriptionWrapper">
      {productInfo?.features
        ? (
          <>
            <div id="description">
              <h3>{productInfo?.slogan}</h3>
              <p>{productInfo?.description}</p>
            </div>
            <div id="features">
              <ul>
                {productInfo?.features.map((feature, index) => <Feature feature={feature} key={index} />)}
              </ul>
            </div>
          </>
        )
        : null}
    </div>
  );
};

export default Description;
