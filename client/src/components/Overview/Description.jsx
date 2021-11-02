import React, { useContext } from 'react';
import OverviewContext from './context.js';
import Feature from './Features.jsx';

const Description = () => {
  const { productInfo } = useContext(OverviewContext);

  if (productInfo.features) {
    return (
      <div id="description">
        <h3>{productInfo.slogan}</h3>
        <p>{productInfo.description}</p>
        <ul>
          {productInfo.features.map((feature) => <Feature feature={feature} />)}
        </ul>
      </div>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
};

export default Description;
