/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';

const Style = ({ style, setStyle }) => {
  const { currentStyle, handleStyleClick } = useContext(OverviewContext);
  const isSelected = currentStyle.style_id === style.style_id;

  return (
    <div>
      {isSelected ? <div className="icon"><FontAwesomeIcon icon={faCheck} size="xs" /></div> : null}
      <div className="styleSelectWrapper" onClick={() => { handleStyleClick(style.style_id); setStyle(style.name); }}>
        <img className="styleThumbnail" src={style.photos[0].thumbnail_url} alt={style.name} />
      </div>
    </div>
  );
};

export default Style;
