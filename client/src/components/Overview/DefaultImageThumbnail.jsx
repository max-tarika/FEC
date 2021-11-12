/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import OverviewContext from './context.js';
import AppContext from '../../context.js';

const DefaultImageThumbnail = ({ thumbnail, i }) => {
  const {
    setActiveIndex, activeIndex,
  } = useContext(OverviewContext);
  const { currentStyle } = useContext(AppContext);
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
        <img className="thumbnail" onClick={handleThumbnailClick} src={thumbnail?.thumbnail_url || 'https://pluspng.com/img-png/loader-png-indicator-loader-spinner-icon-512.png'} alt={currentStyle?.name} />
      </div>
      {isSelected ? <div style={isSelectedValues} /> : <div style={nonSelectedValues} />}
    </div>
  );
};

export default DefaultImageThumbnail;
