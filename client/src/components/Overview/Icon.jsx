/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as emptyCircle } from '@fortawesome/free-regular-svg-icons';
import { OverviewContext } from './context.js';

const Icon = ({ i }) => {
  const {
    setActiveIndex, activeIndex,
  } = useContext(OverviewContext);
  const isSelected = activeIndex === i;

  const handleIconClick = () => {
    setActiveIndex(i);
  };

  return (
    <div className="iconContainer" style={{ padding: '3px' }}>
      <div className="iconWrapper" onClick={handleIconClick}>
        {isSelected ? <FontAwesomeIcon icon={solidCircle} /> : <FontAwesomeIcon icon={emptyCircle} />}
      </div>
    </div>
  );
};

export default Icon;
