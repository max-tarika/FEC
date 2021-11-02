import React, { useContext } from 'react';
import OverviewContext from './context.js';
import Style from './Style.jsx';

const StyleSelector = () => {
  const { styles } = useContext(OverviewContext);

  return (
    <div id="styleSelector">
      {styles.map((style) => <Style style={style} />)}
    </div>
  );
};

export default StyleSelector;
