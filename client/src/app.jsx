/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx';
import Related from './components/Related/Related.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import AppContext from './context.js';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentReview, setCurrentReview] = useState([]);
  const [average, setAverage] = useState(0);

  const getReviewData = () => {
    const productID = currentProduct?.id;
    axios({
      method: 'GET',
      url: `/reviews/meta/?product_id=${productID}`,
    })
      .then((res) => {
        setCurrentReview(res.data);
        let sum = 0;
        let count = 0;
        Object.keys(res.data.ratings).forEach((rating) => {
          sum += rating * res.data.ratings[rating];
          count += Number(res.data.ratings[rating]);
        });
        setAverage(Number((sum / count).toFixed(2)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/products/',
    })
      .then((res) => {
        setCurrentProduct(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    getReviewData();
  }, [currentProduct]);

  return (
    <AppContext.Provider value={{
      currentProduct, currentReview, average,
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
