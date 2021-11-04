/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

const SizeDropdown = ({ skusArr, handleSizeClick }) => (
  <ul>
    {skusArr.map((sku) => <li value={sku[0]} title={sku[1].size} key={sku[0]} onClick={handleSizeClick}>{sku[1].size}</li>)}
  </ul>
);

export default SizeDropdown;
