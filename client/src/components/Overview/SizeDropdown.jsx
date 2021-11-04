/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

const SizeDropdown = ({ skusArr, handleSizeClick }) => (
  <div id="sizeDropdown">
    <ul id="sizeList">
      {skusArr.map((sku) => <li className="sizeSelect" value={sku[0]} title={sku[1].size} key={sku[0]} onClick={handleSizeClick}>{sku[1].size}</li>)}
    </ul>
  </div>
);

export default SizeDropdown;
