import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';
import AppContext from '../../context';
import xIcon from '../../assets/Xicon.png';
import Stars from '../Reviews/Stars.jsx';

const Outfit = ({ product }) => {
  const context = useContext(RelatedContext);
  const appContext = useContext(AppContext);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
  }, [context]);

  return (
    <div>
      <div id="default_image">
        {' '}
        <img src={context.outfit.photo} width="150" height="150" />
        <div id="actionButton"><img src={xIcon} height="20" width="25" /></div>
      </div>
      <div className="product_category">{context.currentProduct.currentProduct.category}</div>
      <div className="product_name">{context.currentProduct.currentProduct.name}</div>
      <div className="product_price">{context.currentProduct.currentProduct.price}</div>
      <Stars average={appContext.average} />
    </div>
  );
};

export default Outfit;
