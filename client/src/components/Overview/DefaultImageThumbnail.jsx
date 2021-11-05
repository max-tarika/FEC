/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { OverviewContext } from './context.js';

const DefaultImageThumbnail = ({ thumbnail }) => {
  const { currentStyle, setImage } = useContext(OverviewContext);

  const handleThumbnailClick = () => {
    setImage(thumbnail.url);
  };

  return (
    <div id="thumbnailWrapper">
      <img className="thumbnail" onClick={handleThumbnailClick} src={thumbnail.thumbnail_url} alt={currentStyle.name} />
    </div>
  );
};

export default DefaultImageThumbnail;
