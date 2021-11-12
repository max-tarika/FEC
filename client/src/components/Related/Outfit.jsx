import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle as xIcon } from '@fortawesome/free-regular-svg-icons';
import RelatedContext from './context';
import AppContext from '../../context';
import Stars from '../Reviews/Stars.jsx';

const Outfit = ({ product, removeEntry }) => {
  const context = useContext(RelatedContext);
  const appContext = useContext(AppContext);

  // console.log(product);

  useEffect(() => {
  }, [context]);

  return (
    <div>
      <div id="default_image">
        {' '}
        <img src={product.photo} width="150" height="150" />
        <div className="actionButton" style={{ paddingRight: '5px' }} onClick={() => { removeEntry(product.id); }}><FontAwesomeIcon icon={xIcon} /></div>
      </div>
      <div className="product_category">{product.category}</div>
      <div className="product_name">{product.name}</div>
      <div className="product_price">{product.price}</div>
      <Stars average={product.average} />
    </div>
  );
};

export default Outfit;
