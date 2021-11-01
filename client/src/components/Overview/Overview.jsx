import React, { useEffect, useContext, useState } from 'react';
import Image from './Image.jsx';
import Information from './Information.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import AppContext from '../../context.js';
import axios from 'axios';

const Overview = () => {
  // states: current style, current product (gotten from useContext), all styles

  const { currentProduct } = useContext(AppContext);
  const [ styles, setStyles ] = useState([]);
  const [ currentStyle, setStyle ] = useState({});
  const [ productInfo, setProductInfo ] = useState({});

  // console.log('----------------------------------------')
  // console.log('current product bissshhh: ', currentProduct);
  // console.log('product info bissshhh: ', productInfo);
  // console.log('styles bissshhh: ', styles);
  // console.log('current style bissshhh: ', currentStyle);



  /* functions:
      handleStyleClick (styleId) --> update the current style
      useEffect() --> update the current style and styles when the current product changes
  */

  function setDefaultStyle(styles) {
    for (var style of styles) {
      if (style['default?']) {
        setStyle(style);
      }
    }
  }

  function handleStyleClick(styleId) {
    for (var style of styles) {
      if (style.style_id === styleId) {
        setStyle(style);
      }
    }
  }

  useEffect(() => {
    axios
      .get(`/products/${currentProduct.id}`)
      .then((response) => { setProductInfo(response.data) });
    axios
      .get(`/products/${currentProduct.id}/styles`)
      .then((response) => { setStyles(response.data.results); setDefaultStyle(response.data.results) })
  }, [currentProduct]);

  return (
  <OverviewContext.Provider value={{ productInfo, styles, currentStyle, handleStyleClick }}>
    <div>
      <h1>Da Overview</h1>
      <Image />
      <Information />
      <StyleSelector />
      <AddToCart />
    </div>
  </OverviewContext.Provider>)
};

export default Overview;
