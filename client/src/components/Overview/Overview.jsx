import React, { useEffect } from 'react';
import Image from './Image.jsx';
import Information from './Information.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const Overview = () => (
  <div>
    <h1>Da Overview</h1>
    <Image />
    <Information />
    <StyleSelector />
    <AddToCart />
  </div>
);

export default Overview;
