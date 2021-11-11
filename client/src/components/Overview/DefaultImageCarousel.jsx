/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';
import AppContext from '../../context.js';

const DefaultImageCarousel = () => {
  const {
    handleImageClick, activeIndex, setActiveIndex, photosLength, imageView, setImageView, zoomedView, handleMouseMove, zoomedStyles,
  } = useContext(OverviewContext);
  const { currentStyle } = useContext(AppContext);
  const zoomStyles = zoomedView ? zoomedStyles : {};

  const goToPrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? activeIndex : activeIndex - 1);
  };

  const goToNextSlide = () => {
    setActiveIndex(activeIndex === photosLength - 1 ? activeIndex : activeIndex + 1);
  };

  return (
    <div id="carouselContainer">
      {activeIndex > 0 && !zoomedView
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
              style={zoomStyles}
              onClick={handleImageClick}
              className={imageView ? 'expandedImage' : 'image'}
              id={zoomedView ? 'zoomedImage' : null}
              onMouseMove={handleMouseMove}
              src={photo.url}
              alt={currentStyle.name}
            />
          </div>
        ))}
      </div>
      {activeIndex < photosLength - 1 && !zoomedView
      && (
      <button className="rightArrow" onClick={goToNextSlide} type="button">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      )}
      {imageView && !zoomedView && <div id="exitExpandedView" onClick={() => { setImageView(false); }}><FontAwesomeIcon icon={faTimes} color="white" /></div>}
    </div>
  );
};

export default DefaultImageCarousel;
