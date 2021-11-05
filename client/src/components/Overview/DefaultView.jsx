/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { OverviewContext } from './context.js';
import DefaultImageThumbnail from './DefaultImageThumbnail.jsx';

const DefaultView = () => {
  const { currentStyle, handleImageClick, image } = useContext(OverviewContext);

  console.log('style photos: ', currentStyle?.photos);

  return (
    <div id="image">
      <img onClick={handleImageClick} className="image" src={image} alt={currentStyle.name} />
      <div id="defaultCarousel">
        {currentStyle?.photos?.map((thumbnail) => <DefaultImageThumbnail thumbnail={thumbnail} />)}
      </div>
    </div>
  );
};

export default DefaultView;
