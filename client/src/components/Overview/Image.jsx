/* eslint-disable no-else-return */
import React, { useContext } from 'react';
import { OverviewContext } from './context.js';

const Image = () => {
  const { currentStyle } = useContext(OverviewContext);

  if (currentStyle?.photos) {
    return (
      <div id="image">
        <img className="image" src={currentStyle.photos[0].url} alt={currentStyle.name} />
      </div>
    );
  }
  return null;
};

export default Image;
