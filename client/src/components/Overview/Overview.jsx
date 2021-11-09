/* eslint-disable max-len */
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
// import ExpandedView from './ExpandedView.jsx';
import DefaultView from './DefaultView.jsx';

const Overview = () => {
  const {
    currentProduct, setStyle, styles, currentStyle,
  } = useContext(AppContext);
  const [productInfo, setProductInfo] = useState({});
  const [imageView, setImageView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slider, setSlider] = useState(0);
  const [photosLength, setPhotosLength] = useState(0);
  const [thumbnailsShown, setThumbnailsShown] = useState([0, 6]);
  const carouselHeight = document.querySelector('.thumbnailCarousel-content-wrapper')?.offsetHeight;
  const thumbnailHeight = document.querySelector('.thumbnailContainer')?.offsetHeight;
  const hiddenThumbnails = photosLength - 7;
  const hiddenThumbnailsLength = hiddenThumbnails * thumbnailHeight;

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
      setThumbnailsShown([thumbnailsShown[0] - 1, thumbnailsShown[1] - 1]);
    }
    if (activeIndex > thumbnailsShown[1]) {
      const upperBound = activeIndex - thumbnailsShown[1];
      setSlider(slider - (upperBound * thumbnailHeight));
      setThumbnailsShown([thumbnailsShown[0] + 1, thumbnailsShown[1] + 1]);
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
      hiddenThumbnails,
      hiddenThumbnailsLength,
      carouselHeight,
      thumbnailsShown,
      setThumbnailsShown,
      imageView,
    }}
    >
      <section className="widget">
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
