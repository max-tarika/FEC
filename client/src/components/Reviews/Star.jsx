import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutline } from '@fortawesome/free-regular-svg-icons';
// import starOutline from '../../assets/starOutline.png';
// import starFill from '../../assets/starFill.png';

const Star = (props) => {
  const { index } = props;
  const { average } = props;

  const getFill = (index, average) => {
    const percent = (average - Math.floor(average)) * 100;

    if (average >= index + 1) {
      return '100%';
    }
    if (average > index && average < index + 1) {
      return `${percent}%`;
    }
    return '0%';
  };

  return (
    <div className="starWrapper">
      <div className="innerStar" style={{ width: getFill(index, average) }}>
        <FontAwesomeIcon icon={starSolid} />
      </div>
      <FontAwesomeIcon icon={starOutline} className="outerStar" />
    </div>
  );
};

export default Star;

{ /* <div className="starWrapper">
      <div className="innerStar" style={{ width: getFill(index, average) }}>
        <img src={starFill} />
      </div>
      <img src={starOutline} className="outerStar" />
    </div> */ }
