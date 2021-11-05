/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import Information from './Information.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import AppContext from '../../context.js';
import { OverviewContext } from './context.js';
import Description from './Description.jsx';
import ExpandedView from './ExpandedView.jsx';
import DefaultView from './DefaultView.jsx';

const Overview = () => {
  const { currentProduct } = useContext(AppContext);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setStyle] = useState({});
  const [productInfo, setProductInfo] = useState({});
  const [imageView, setImageView] = useState(false);
  const [image, setImage] = useState();

  const setDefaultStyle = (stylesArr) => {
    for (const style of stylesArr) {
      if (style['default?']) {
        setStyle(style);
      }
    }
  };

  const handleStyleClick = (styleId) => {
    for (const style of styles) {
      if (style.style_id === styleId) {
        setStyle(style);
      }
    }
  };

  const handleImageClick = () => {
    setImageView(!imageView);
  };

  useEffect(() => {
    if (currentProduct?.id) {
      axios
        .get(`/products/${currentProduct.id}`)
        .then((response) => { setProductInfo(response.data); })
        .catch((err) => { console.error(err); });
      axios
        .get(`/products/${currentProduct.id}/styles`)
        .then((response) => {
          setStyles(response.data.results);
          setDefaultStyle(response.data.results);
        })
        .catch((err) => { console.error(err); });
    }
  }, [currentProduct]);

  return (
    <OverviewContext.Provider value={{
      productInfo, styles, currentStyle, handleStyleClick, handleImageClick, image, setImage,
    }}
    >
      <section id="widget">
        {imageView
          ? <ExpandedView />
          : (
            <div id="overviewContainer">
              <DefaultView />
              <div id="overviewWrapper">
                <Information />
                <StyleSelector />
                <AddToCart />
              </div>
            </div>
          )}
        <div id="descriptionContainer">
          <Description />
        </div>
      </section>
    </OverviewContext.Provider>
  );
};

export default Overview;
