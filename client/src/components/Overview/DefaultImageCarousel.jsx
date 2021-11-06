/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';

const DefaultImageCarousel = () => {
  const {
    currentStyle, handleImageClick, activeIndex, setActiveIndex,
  } = useContext(OverviewContext);
  const length = currentStyle?.photos?.length;

  const goToPrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? activeIndex : activeIndex - 1);
  };

  const goToNextSlide = () => {
    setActiveIndex(activeIndex === length - 1 ? activeIndex : activeIndex + 1);
  };

  return (
    <div id="defaultImageCarousel">
      {activeIndex > 0
      && (
      <button className="carouselButton carouselLeft" onClick={goToPrevSlide} type="button">
        <FontAwesomeIcon icon={faAngleLeft} color="white" />
      </button>
      )}
      <div className="innerCarousel">
        {currentStyle?.photos?.map((photo, i) => (
          <img
            onClick={handleImageClick}
            className={i === activeIndex ? 'active image' : 'inactive image'}
            src={photo.url}
            alt={currentStyle.name}
          />
        ))}
      </div>
      {activeIndex < length - 1
      && (
      <button className="carouselButton carouselRight" onClick={goToNextSlide} type="button">
        <FontAwesomeIcon icon={faAngleRight} color="white" />
      </button>
      )}
    </div>
  );
};

export default DefaultImageCarousel;

// <div key={i}>
//   {i === activeIndex && (
//     <img onClick={handleImageClick} className="image" src={photo.url} alt={currentStyle.name} />
//   )}
// </div>
