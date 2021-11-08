/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';

const DefaultImageCarousel = () => {
  const {
    currentStyle, handleImageClick, activeIndex, setActiveIndex, photosLength, imageView,
  } = useContext(OverviewContext);

  const goToPrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? activeIndex : activeIndex - 1);
  };

  const goToNextSlide = () => {
    setActiveIndex(activeIndex === photosLength - 1 ? activeIndex : activeIndex + 1);
  };

  const imgStyles = imageView ? { cursor: 'crosshair' } : null;

  return (
    <div id="carouselContainer">
      {activeIndex > 0
      && (
      <button className="leftArrow" onClick={goToPrevSlide} type="button">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      )}
      <div className="carouselContent">
        {currentStyle?.photos?.map((photo, i) => (
          <div
            className={i === activeIndex ? 'active imageWrapper' : 'inactive imageWrapper'}
            key={i}
            id={imageView && 'expandedImageWrapper'}
          >
            <img
              style={imgStyles}
              onClick={handleImageClick}
              className="image"
              src={photo.url}
              alt={currentStyle.name}
            />
          </div>
        ))}
      </div>
      {activeIndex < photosLength - 1
      && (
      <button className="rightArrow" onClick={goToNextSlide} type="button">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      )}
    </div>
  );
};

export default DefaultImageCarousel;
