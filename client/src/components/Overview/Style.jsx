/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import OverviewContext from './context.js';
import AppContext from '../../context.js';

const Style = ({ style }) => {
  const { handleStyleClick } = useContext(OverviewContext);
  const { currentStyle } = useContext(AppContext);
  const isSelected = currentStyle?.style_id === style.style_id;

  return (
    <div style={{
      position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      {isSelected ? <div className="icon" style={{ fontSize: '0.5rem' }}><FontAwesomeIcon icon={faCheck} size="lg" /></div> : null}
      <div className="styleSelectWrapper" onClick={() => { handleStyleClick(style?.style_id); }}>
        <img className="styleThumbnail" src={style?.photos[0].thumbnail_url || 'https://pluspng.com/img-png/loader-png-indicator-loader-spinner-icon-512.png'} alt={style?.name} />
      </div>
    </div>
  );
};

export default Style;
