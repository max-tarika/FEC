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
  const [relatedAverage, setRelatedAverage] = useState(0);

  console.log('checking product ', product);
  // console.log('does the id work? ', id);

  const getRelatedAverage = () => {
    axios({
      method: 'GET',
      url: `/reviews/meta/?product_id=${product.id}`,
    })
      .then((res) => {
        let sum = 0;
        let count = 0;
        Object.keys(res.data.ratings).forEach((rating) => {
          sum += rating * res.data.ratings[rating];
          count += Number(res.data.ratings[rating]);
        });
        setRelatedAverage(Number((sum / count).toFixed(2)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRelatedAverage();
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
      <Stars average={relatedAverage} />
    </div>
  );
};

export default ProductCard;
