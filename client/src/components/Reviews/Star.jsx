import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutline } from '@fortawesome/free-regular-svg-icons';

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
      <div className="outerStar">
        <FontAwesomeIcon icon={starOutline} />
      </div>
    </div>
  );
};

export default Star;
