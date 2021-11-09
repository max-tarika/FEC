/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';
import DefaultImageThumbnail from './DefaultImageThumbnail.jsx';
import AppContext from '../../context.js';

const ThumbnailCarousel = () => {
  const {
    slider, setSlider, thumbnailHeight, hiddenThumbnailsLength, photosLength, thumbnailsShown, setThumbnailsShown,
  } = useContext(OverviewContext);
  const { currentStyle } = useContext(AppContext);

  const goToPrevSlide = () => {
    setSlider(slider === 0 ? slider : slider + thumbnailHeight);
    if (thumbnailsShown[0] > 0) {
      setThumbnailsShown([thumbnailsShown[0] - 1, thumbnailsShown[1] - 1]);
    }
  };

  const goToNextSlide = () => {
    setSlider(slider === -hiddenThumbnailsLength ? slider : slider - thumbnailHeight);
    if (thumbnailsShown[1] < photosLength) {
      setThumbnailsShown([thumbnailsShown[0] + 1, thumbnailsShown[1] + 1]);
    }
  };

  return (
    <div className="thumbnailCarousel-container">
      <div className="thumbnailCarousel-wrapper">
        <div>
          {slider < 0
          && (
          <button className="upArrow" onClick={goToPrevSlide} type="button">
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
          )}
          {slider > -hiddenThumbnailsLength
          && (
          <button className="downArrow" onClick={goToNextSlide} type="button">
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          )}
        </div>
        <div className="thumbnailCarousel-content-wrapper">
          <div style={{ transform: `translateY(${slider}px)` }}>
            {currentStyle?.photos?.map((thumbnail, i) => <DefaultImageThumbnail thumbnail={thumbnail} i={i} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
