/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import OverviewContext from './context.js';

const Style = ({ style }) => {
  const { currentStyle, handleStyleClick } = useContext(OverviewContext);
  const isSelected = currentStyle.style_id === style.style_id;

  return (
    <div id="styleSelectWrapper" onClick={() => { handleStyleClick(style.style_id); }}>
      <div id="styleName">{isSelected ? style.name : ''}</div>
      <img className="styleThumbnail" id="selectedThumbnail" src={style.photos[0].thumbnail_url} alt={style.name} width="50" height="50" />
      {isSelected ? <FontAwesomeIcon icon={faCheck} id="selectedIcon" /> : null}
    </div>
  );
};

export default Style;
