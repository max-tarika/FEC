import React, { useEffect, useContext, useState } from 'react';
import Image from './Image.jsx';
import Information from './Information.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import AppContext from '../../context.js';
import axios from 'axios';
import OverviewContext from './context.js';
import Description from './Description.jsx';

const Overview = () => {

  const { currentProduct } = useContext(AppContext);
  const [ styles, setStyles ] = useState([]);
  const [ currentStyle, setStyle ] = useState({});
  const [ productInfo, setProductInfo ] = useState({});

  console.log('----------------------------');
  console.log('product Info', productInfo);

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
    if (currentProduct?.id) {
      axios
        .get(`/products/${currentProduct.id}`)
        .then((response) => { setProductInfo(response.data) })
        .catch((err) => {console.error(err)});
      axios
        .get(`/products/${currentProduct.id}/styles`)
        .then((response) => { setStyles(response.data.results); setDefaultStyle(response.data.results) })
        .catch((err) => {console.error(err)});
    }
  }, [currentProduct]);

  return (
  <OverviewContext.Provider value={{ productInfo, styles, currentStyle, handleStyleClick }}>
    <section className="overview">
      <h1>Da Overview</h1>
      <Image />
      <Information />
      <StyleSelector />
      <AddToCart />
      <Description />
    </section>
  </OverviewContext.Provider>)
};

export default Overview;
