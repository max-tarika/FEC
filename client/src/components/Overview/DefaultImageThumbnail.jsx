/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { OverviewContext } from './context.js';

const DefaultImageThumbnail = ({ thumbnail, i }) => {
  const {
    currentStyle, setActiveIndex, activeIndex,
  } = useContext(OverviewContext);
  const isSelected = activeIndex === i;
  const isSelectedValues = {
    borderBottomWidth: '3px', borderBottomColor: 'white', borderBottomStyle: 'solid', marginTop: '2px',
  };
  const nonSelectedValues = {
    marginTop: '2px', paddingBottom: '3px',
  };

  const handleThumbnailClick = () => {
    setActiveIndex(i);
  };

  return (
    <div className="thumbnailContainer" style={{ padding: '3px' }}>
      <div id="thumbnailWrapper">
        <img className="thumbnail" onClick={handleThumbnailClick} src={thumbnail.thumbnail_url} alt={currentStyle.name} />
      </div>
      {isSelected ? <div style={isSelectedValues} /> : <div style={nonSelectedValues} />}
    </div>
  );
};

export default DefaultImageThumbnail;
