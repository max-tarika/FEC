/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { OverviewContext } from './context.js';
import AppContext from '../../context.js';

const ExpandedView = () => {
  const { handleImageClick, image } = useContext(OverviewContext);
  const { currentStyle } = useContext(AppContext);

  return (
    <div id="expandedImage">
      <img onClick={handleImageClick} className="image" src={image} alt={currentStyle.name} />
    </div>
  );
};

export default ExpandedView;
