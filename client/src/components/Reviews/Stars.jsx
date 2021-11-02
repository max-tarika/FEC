/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';

const Stars = (props) => {
  const { average } = props;
  const style = {
    backgroundColor: 'green',
    overflow: 'hidden',
  };

  return (
    <div id="stars">
      <ul className="stars">
        <li style={style} />
        <li style={style} />
        <li style={style} />
        <li style={style} />
        <li style={style} />
      </ul>
    </div>
  );
};

export default Stars;
