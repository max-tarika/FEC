/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Overview from './components/Overview/Overview.jsx';
import Related from './components/Related/Related.jsx';
import Reviews from './components/Reviews/Reviews.jsx';

import AppContext from './context.js';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState();
  const [currentReview, setCurrentReview] = useState([]);
  const [relatedIds, setRelatedID] = useState([]);
  const [average, setAverage] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);

  const calcReviewsAverage = (data) => {
    let sum = 0;
    let count = 0;
    Object.keys(data.ratings).forEach((rating) => {
      sum += rating * data.ratings[rating];
      count += Number(data.ratings[rating]);
    });
    setAverage(Number((sum / count).toFixed(1)));
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/products',
    })
      .then((res) => {
        setCurrentProduct(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (currentProduct) {
      axios({
        method: 'GET',
        url: `/reviews/meta/?product_id=${currentProduct.id}`,
      })
        .then((res) => {
          setCurrentReview(res.data);
          calcReviewsAverage(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios.get(`/products/${currentProduct.id}/related`)
        .then((res) => {
          setRelatedID(res.data);
        });
    }
  }, [currentProduct]);

  useEffect(() => {
    if (relatedIds.length > 1) {
      Promise.all(relatedIds.map((id) => axios.get(`/products/${id}`)))
        .then((values) => {
          const array = [];
          for (let i = 0; i < values.length; i += 1) {
            array.push(values[i].data);
          }
          setRelatedProducts(array);
        });
      Promise.all(relatedIds.map((id) => axios.get(`/products/${id}/styles`)))
        .then((values) => {
          console.log('values = ', values);
          const arr = [];
          for (let i = 0; i < values.length; i += 1) {
            arr.push(values[i].data);
          }
          setRelatedStyles(arr);
        });
    }
  }, [relatedIds]);

  if (!currentProduct) {
    return <div id="loadingScreen">Da Island Is LoADing Mon</div>;
  }
  return (
    <AppContext.Provider value={{
      currentProduct, currentReview, average, relatedProducts, relatedStyles,
    }}
    >
      <div>
        <h1>Da Island Bois</h1>
        <Overview />
        <Related />
        <Reviews />
      </div>
    </AppContext.Provider>
  );
};

export default App;
