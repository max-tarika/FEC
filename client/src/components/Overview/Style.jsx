/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import OverviewContext from './context.js';

const Style = ({ style }) => {
  const { currentStyle, handleStyleClick } = useContext(OverviewContext);

  if (currentStyle.style_id === style.style_id) {
    return (
      <div>
        <div>{style.name}</div>
        <img className="styleThumbnail" id="selectedThumbnail" src={style.photos[0].thumbnail_url} alt={style.name} width="50" height="50" />
        <div className="overlay">
          <FontAwesomeIcon icon={faCheck} />
        </div>
      </div>
    );
  }
  return (
    <div onClick={() => { handleStyleClick(style.style_id); }}>
      <img className="styleThumbnail" src={style.photos[0].thumbnail_url} alt={style.name} width="50" height="50" />
    </div>
  );
};

export default Style;
