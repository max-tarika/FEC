/* eslint-disable react/no-array-index-key */
import React, { useContext, useState } from 'react';
import AppContext from '../../context.js';
import Style from './Style.jsx';

const StyleSelector = () => {
  const { styles, currentStyle } = useContext(AppContext);
  const [selectedStyle, setSelectedStyle] = useState();

  return (
    <div id="styleSelector">
      <div id="currentStyleName">
        Style
        {' '}
        {'>'}
        {' '}
        {selectedStyle || currentStyle?.name}
      </div>
      <div id="stylesWrapper">
        {styles?.map((style, i) => <Style style={style} key={i} setStyle={setSelectedStyle} />)}
      </div>
    </div>
  );
};

export default StyleSelector;
