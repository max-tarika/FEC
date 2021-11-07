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
    <div id="carouselContainer">
      {activeIndex > 0
      && (
      <button className="leftArrow" onClick={goToPrevSlide} type="button">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      )}
      <div className="carouselContent">
        {currentStyle?.photos?.map((photo, i) => (
          <div className={i === activeIndex ? 'active imageWrapper' : 'inactive imageWrapper'}>
            <img
              onClick={handleImageClick}
              className="image"
              src={photo.url}
              alt={currentStyle.name}
            />
          </div>
        ))}
      </div>
      {activeIndex < length - 1
      && (
      <button className="rightArrow" onClick={goToNextSlide} type="button">
        <FontAwesomeIcon icon={faAngleRight} />
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
