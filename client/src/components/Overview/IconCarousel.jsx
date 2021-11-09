/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { OverviewContext } from './context.js';
import Icon from './Icon.jsx';
import AppContext from '../../context.js';

const IconCarousel = () => {
  const {
    slider, setSlider, thumbnailHeight, photosLength, thumbnailsShown, setThumbnailsShown, iconHeight, iconSlider, setIconSlider,
  } = useContext(OverviewContext);
  const { currentStyle } = useContext(AppContext);

  const goToPrevSlide = () => {
    if (thumbnailsShown[0] > 0) {
      setSlider(slider + thumbnailHeight);
      setIconSlider(slider + iconHeight);
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
    <div className="iconCarousel-container">
      <div className="iconCarousel-wrapper">
        <div>
          {thumbnailsShown[0] > 0
          && (
          <button className="upArrow" onClick={goToPrevSlide} type="button">
            <FontAwesomeIcon icon={faAngleUp} />
          </button>
          )}
          {thumbnailsShown[1] < photosLength - 1
          && (
          <button className="downArrow" onClick={goToNextSlide} type="button">
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
          )}
        </div>
        <div className="iconCarousel-content-wrapper">
          <div style={{ transform: `translateY(${iconSlider}px)` }}>
            {currentStyle?.photos?.map((icon, i) => <Icon i={i} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconCarousel;
