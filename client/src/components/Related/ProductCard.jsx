import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import RelatedContext from './context';
import AppContext from '../../context';
import Stars from '../Reviews/Stars.jsx';

const ProductCard = ({ product }) => {
  const context = useContext(RelatedContext);
  const appContext = useContext(AppContext);
  const [image, setImage] = useState('https://pluspng.com/img-png/loader-png-indicator-loader-spinner-icon-512.png');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  if (product.photo === null) {
    product.photo = 'https://pluspng.com/img-png/loader-png-indicator-loader-spinner-icon-512.png';
  }

  useEffect(() => {

  }, [context]);

  return (
    <div>
      <div id="default_image">
        <img title={product.id} id={product.id} src={product.photo} width="150" height="150" alt="product image" />
        <div className="actionButton" title={product.id} id={product.id}><FontAwesomeIcon icon={starSolid} /></div>

      </div>
      <div className="product_category" title={product.id} id={product.id}>{product.category}</div>
      <div className="product_name" title={product.id} id={product.id}>{product.name}</div>
      <div className="product_price" title={product.id} id={product.id}>{product.price}</div>
      <Stars average={product.avg} />
    </div>
  );
};

export default ProductCard;
