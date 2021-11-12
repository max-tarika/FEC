/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import AppContext from '../../context.js';
import Style from './Style.jsx';

const StyleSelector = () => {
  const { styles, currentStyle } = useContext(AppContext);

  return (
    <div id="styleSelector">
      <div id="currentStyleName">
        Style
        {' '}
        {'>'}
        {' '}
        {currentStyle?.name}
      </div>
      <div id="stylesWrapper">
        {styles?.map((style, i) => <Style style={style} key={i} />)}
      </div>
    </div>
  );
};

export default StyleSelector;
