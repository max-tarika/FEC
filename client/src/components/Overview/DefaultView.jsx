/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';
import DefaultImageThumbnail from './DefaultImageThumbnail.jsx';
import DefaultImageCarousel from './DefaultImageCarousel.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

const DefaultView = () => {
  const { currentStyle } = useContext(OverviewContext);

  return (
    <div id="defaultImageContainer">
      <ThumbnailCarousel>
        <div id="defaultThumbnailCarousel">
          {currentStyle?.photos?.map((thumbnail, i) => <DefaultImageThumbnail thumbnail={thumbnail} i={i} />)}
        </div>
      </ThumbnailCarousel>
      <DefaultImageCarousel />
    </div>
  );
};

export default DefaultView;
