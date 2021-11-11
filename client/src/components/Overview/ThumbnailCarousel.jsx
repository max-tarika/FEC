/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';
import DefaultImageThumbnail from './DefaultImageThumbnail.jsx';
import AppContext from '../../context.js';
import Icon from './Icon.jsx';

const ThumbnailCarousel = () => {
  const {
    slider, setSlider, thumbnailHeight, photosLength, thumbnailsShown, setThumbnailsShown, iconHeight, iconSlider, setIconSlider, imageView,
  } = useContext(OverviewContext);
  const { currentStyle } = useContext(AppContext);
  const carouselType = imageView ? 'icon' : 'thumbnail';

  const goToPrevSlide = () => {
    if (thumbnailsShown[0] > 0) {
      setSlider(slider + thumbnailHeight);
      setIconSlider(iconSlider + iconHeight);
      setThumbnailsShown([thumbnailsShown[0] - 1, thumbnailsShown[1] - 1]);
    }
  };

  const goToNextSlide = () => {
    if (thumbnailsShown[1] < photosLength) {
      setSlider(slider - thumbnailHeight);
      setIconSlider(iconSlider - iconHeight);
      setThumbnailsShown([thumbnailsShown[0] + 1, thumbnailsShown[1] + 1]);
    }
  };

  return (
    <div className={`${carouselType}Carousel-container`}>
      <div className={`${carouselType}Carousel-wrapper`}>
        <div>
          {thumbnailsShown[0] > 0
          && (
          <button className="upArrow" onClick={goToPrevSlide} type="button">
            <FontAwesomeIcon icon={faAngleUp} color="white" />
          </button>
          )}
          {thumbnailsShown[1] < photosLength - 1
          && (
          <button className="downArrow" onClick={goToNextSlide} type="button">
            <FontAwesomeIcon icon={faAngleDown} color="white" />
          </button>
          )}
        </div>
        <div className={`${carouselType}Carousel-content-wrapper`}>
          {imageView
            ? (
              <div style={{ transform: `translateY(${iconSlider}px)` }}>
                {currentStyle?.photos?.map((icon, i) => <Icon i={i} key={i} />)}
              </div>
            )
            : (
              <div style={{ transform: `translateY(${slider}px)` }}>
                {currentStyle?.photos?.map((thumbnail, i) => <DefaultImageThumbnail thumbnail={thumbnail} i={i} key={i} />)}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
