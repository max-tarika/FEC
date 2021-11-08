import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';
import AppContext from '../../context';
import Stars from '../Reviews/Stars.jsx';
import starIcon from '../../assets/starIcon.jpeg';

const ProductCard = ({ product }) => {
  const context = useContext(RelatedContext);
  const appContext = useContext(AppContext);
  const [image, setImage] = useState('https://pluspng.com/img-png/loader-png-indicator-loader-spinner-icon-512.png');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);



  // console.log('does the id work? ', id);

  useEffect(() => {

  }, [context]);

  return (
    <div>
      <div id="default_image">
        <img id={product.id} src={product.photo} width="150" height="150" />
        <div id="actionButton"><img src={starIcon} height="20" width="20" /></div>

      </div>
      <div className="product_category" id={product.id}>{product.category}</div>
      <div className="product_name" id={product.id}>{product.name}</div>
      <div className="product_price" id={product.id}>{product.price}</div>
      <Stars average={product.avg} />
    </div>
  );
};

export default ProductCard;
