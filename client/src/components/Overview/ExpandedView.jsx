/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { OverviewContext } from './context.js';

const ExpandedView = () => {
  const { currentStyle, handleImageClick } = useContext(OverviewContext);

  return (
    <div id="image">
      <img onClick={handleImageClick} className="image" src={currentStyle?.photos?.[0].url} alt={currentStyle.name} />
    </div>
  );
};

export default ExpandedView;
