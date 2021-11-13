/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import React, {
  useEffect, useContext, useState,
} from 'react';
import axios from 'axios';
import Information from './Information.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import AppContext from '../../context.js';
import OverviewContext from './context.js';
import Description from './Description.jsx';
import DefaultView from './DefaultView.jsx';

const Overview = ({ captureClickData }) => {
  const {
    currentProduct, setStyle, styles, currentStyle,
  } = useContext(AppContext);
  const [productInfo, setProductInfo] = useState({});
  const [imageView, setImageView] = useState(false);
  const [zoomedView, setZoomedView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slider, setSlider] = useState(0);
  const [photosLength, setPhotosLength] = useState(0);
  const [thumbnailsShown, setThumbnailsShown] = useState([0, 6]);
  const [iconSlider, setIconSlider] = useState(0);
  const [zoomedStyles, setZoomedStyles] = useState({});
  const thumbnailHeight = 51;
  const iconHeight = 25;

  const handleStyleClick = (styleId) => {
    for (const style of styles) {
      if (style.style_id === styleId) {
        setStyle(style);
      }
    }
  };

  const handleImageClick = (e) => {
    if (imageView) {
      const x = ((e.pageX - e.target.offsetLeft) / parseInt(e.target.width, 10)) * 100;
      const y = ((e.pageY - e.target.offsetTop) / parseInt(e.target.height, 10)) * 100;
      setZoomedView(!zoomedView);
      setZoomedStyles({ transform: 'scale(2.5)', transformOrigin: `${x}% ${y}%` });
    } else {
      setImageView(true);
    }
  };

  const handleMouseMove = (e) => {
    if (zoomedView) {
      const x = ((e.pageX - e.target.offsetLeft) / parseInt(e.target.width, 10)) * 100;
      const y = ((e.pageY - e.target.offsetTop) / parseInt(e.target.height, 10)) * 100;
      setZoomedStyles({ transform: 'scale(2.5)', transformOrigin: `${x}% ${y}%` });
    }
  };

  useEffect(() => {
    if (currentProduct?.id) {
      axios
        .get(`/products/${currentProduct.id}`)
        .then((response) => { setProductInfo(response.data); })
        .catch((err) => { console.error(err); });
    }
  }, [currentProduct]);

  useEffect(() => {
    if (currentStyle?.photos) {
      setPhotosLength(currentStyle?.photos?.length);
    }
  }, [currentStyle]);

  useEffect(() => {
    if (activeIndex < thumbnailsShown[0]) {
      const lowerBound = activeIndex - thumbnailsShown[0];
      setSlider(slider - (lowerBound * thumbnailHeight));
      setIconSlider(iconSlider - (lowerBound * iconHeight));
      setThumbnailsShown([activeIndex, activeIndex + 6]);
    }
    if (activeIndex > thumbnailsShown[1]) {
      const upperBound = activeIndex - thumbnailsShown[1];
      setSlider(slider - (upperBound * thumbnailHeight));
      setIconSlider(iconSlider - (upperBound * iconHeight));
      setThumbnailsShown([activeIndex - 6, activeIndex]);
    }
  }, [activeIndex]);

  return (
    <OverviewContext.Provider value={{
      productInfo,
      handleStyleClick,
      handleImageClick,
      activeIndex,
      setActiveIndex,
      slider,
      setSlider,
      photosLength,
      thumbnailHeight,
      thumbnailsShown,
      setThumbnailsShown,
      imageView,
      iconSlider,
      setIconSlider,
      iconHeight,
      setImageView,
      zoomedView,
      setZoomedView,
      zoomedStyles,
      handleMouseMove,
    }}
    >
      <section className="widget" onClick={(e) => { captureClickData(e, 'Overview'); }}>
        {imageView
          ? <div className="expandedView"><DefaultView /></div>
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
