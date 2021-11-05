/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';

const DefaultImageCarousel = () => {
  const { currentStyle, handleImageClick, image } = useContext(OverviewContext);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [currentImage, setCurrentImage] = useState();
  // const [carouselLength, setCarouselLength] = useState(currentStyle?.photos.length);

  const goToPrevSlide = () => {
    let index = activeIndex;

    if (index > 0) {
      index -= 1;
    }

    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    let index = activeIndex;
    const length = currentStyle?.photos?.length;

    if (index < length - 1) {
      index += 1;
    }

    setActiveIndex(index);
  };

  return (
    <div id="defaultImageCarousel">
      <button className="carouselButton carouselLeft" onClick={goToPrevSlide} type="button">
        <FontAwesomeIcon icon={faAngleLeft} color="white" />
      </button>
      <div>
        {currentStyle?.photos?.map((photo, i) => (
          <img
            onClick={handleImageClick}
            className={i === activeIndex ? 'active image' : 'inactive image'}
            src={photo.url}
            alt={currentStyle.name}
          />
        ))}
      </div>
      <button className="carouselButton carouselRight" onClick={goToNextSlide} type="button">
        <FontAwesomeIcon icon={faAngleRight} color="white" />
      </button>
    </div>
  );
};

export default DefaultImageCarousel;
