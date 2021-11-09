/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import DefaultImageCarousel from './DefaultImageCarousel.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import { OverviewContext } from './context.js';
import IconCarousel from './IconCarousel.jsx';

const DefaultView = () => {
  const { imageView } = useContext(OverviewContext);

  return (
    <div>
      {imageView
        ? (
          <div id="expandedViewContainer">
            <IconCarousel />
            <DefaultImageCarousel />
          </div>
        )
        : (
          <div id="defaultImageContainer">
            <ThumbnailCarousel />
            <DefaultImageCarousel />
          </div>
        )}
    </div>
  );
};

export default DefaultView;
