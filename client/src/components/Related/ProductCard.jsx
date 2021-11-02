import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';

const ProductCard = ({ id }) => {
  const context = useContext(RelatedContext);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  // console.log('context here ', context);

  const getDisplay = () => {
    axios.get(`/products/${id}`).then((response) => {
      const categorySet = response.data.category;
      const nameSet = response.data.name;
      const priceSet = response.data.default_price;
      setCategory(categorySet);
      setName(nameSet);
      setPrice(priceSet);
    });
    axios.get(`/products/${id}/styles`).then((res) => {
      for (let i = 0; i < res.data.results.length; i += 1) {
        if (res.data.results[i]['default?'] === true) {
          const photo_url = res.data.results[i].photos[0].thumbnail_url;
          setImage(photo_url);
        }
      }
    });
  };

  useEffect(() => {
    getDisplay();
  }, [context]);

  return (
    <div>
      <div className="default_image" />
      <img src={image} alt="loading" width="100" height="150" />
      <div className="product_category">{category}</div>
      <div className="product_name">{name}</div>
      <div className="product_price">{price}</div>
      <div className="stars" />
    </div>
  );
};

export default ProductCard;
