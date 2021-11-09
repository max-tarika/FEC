/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import DefaultImageCarousel from './DefaultImageCarousel.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import { OverviewContext } from './context.js';

const DefaultView = () => {
  const { imageView } = useContext(OverviewContext);

  return (
    <div id={imageView ? 'expandedViewContainer' : 'defaultImageContainer'}>
      <ThumbnailCarousel />
      <DefaultImageCarousel />
    </div>
  );
};

export default DefaultView;
