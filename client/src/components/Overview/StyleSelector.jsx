/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { OverviewContext } from './context.js';
import Style from './Style.jsx';

const StyleSelector = () => {
  const { styles } = useContext(OverviewContext);

  return (
    <div id="styleSelector">
      {styles.map((style, index) => <Style style={style} key={index} />)}
    </div>
  );
};

export default StyleSelector;
