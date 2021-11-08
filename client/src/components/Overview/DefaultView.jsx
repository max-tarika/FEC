/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import DefaultImageCarousel from './DefaultImageCarousel.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

const DefaultView = () => (
  <div id="defaultImageContainer">
    <ThumbnailCarousel />
    <DefaultImageCarousel />
  </div>
);

export default DefaultView;
