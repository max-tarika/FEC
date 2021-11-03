/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import star from '../../assets/star.png';

const Stars = (props) => {
  const { average } = props;
  const style = {

  };

  return (
    <div id="stars">
      <ul className="stars">
        <li style={style}>
          {' '}
          <img src={star} />
        </li>
        <li style={style}>
          {' '}
          <img src={star} />
        </li>
        <li style={style}>
          {' '}
          <img src={star} />
        </li>
        <li style={style}>
          {' '}
          <img src={star} />
        </li>
        <li style={style}>
          {' '}
          <img src={star} />
        </li>
      </ul>
    </div>
  );
};

export default Stars;
