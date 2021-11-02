/* eslint-disable no-else-return */
import React, { useContext } from 'react';
import OverviewContext from './context.js';

const Image = () => {
  const { currentStyle } = useContext(OverviewContext);

  if (currentStyle?.photos) {
    return (
      <section id="image">
        <h4>Sick Image of My Cool Island Style</h4>
        <img src={currentStyle.photos[0].url} alt={currentStyle.name} />
      </section>
    );
  }
  return null;
};

export default Image;
