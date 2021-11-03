import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';

const Outfit = ({ outfit }) => {
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
          let photo_url = res.data.results[i].photos[0].thumbnail_url;
          if (photo_url === null || photo_url === undefined) {
            photo_url = 'https://pluspng.com/img-png/loader-png-indicator-loader-spinner-icon-512.png';
          }
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
      <div id="default_image" />
      <img src={image} width="150" height="150" />
      <div className="product_category">{category}</div>
      <div className="product_name">{name}</div>
      <div className="product_price">{price}</div>
      <div className="stars" />
    </div>
  );
};

export default Outfit;
