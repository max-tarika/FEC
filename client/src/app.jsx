import React, { useState, useEffect } from 'react';

import Overview from './components/Overview/Overview.jsx';
import Related from './components/Related/Related.jsx';
import Reviews from './components/Reviews/Reviews.jsx';

const axios = require('axios');

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentRatings, setCurrentRatings] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/products/',
    })
      .then((response) => {
        setProducts(response.data);
      })
      .then(
        axios({
          method: 'GET',
          url: '/reviews/meta/?product_id=44388',
        })
          .then((res) => {
            setCurrentRatings(res.data);
          }),
      )
      .then(
        axios({
          method: 'GET',
          url: '/products/',
        })
          .then((oneMoreRes) => {
            setCurrentProduct(oneMoreRes.data[0]);
          }),
      );
  }, []);

  function getAvgRating() {
    let sum = 0;
    let totalRatings = 0;
    const ratingsObj = currentRatings.ratings;
    Object.keys(ratingsObj).forEach((rating) => {
      sum += rating * ratingsObj[rating];
      totalRatings += Number(ratingsObj[rating]);
    });
    return sum / totalRatings;
  }

  return (
    <div>
      <h1>Da Island Bois</h1>
      <Overview />
      <Related />
      <Reviews />
      <div>
        <form>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              console.log('ALL PRODUCTS:', products);
              console.log('CURRENT REVIEW DEETS:', currentRatings);
              console.log('CURRENT PRODUCT DEETS:', currentProduct);
              console.log('AVERAGE RATING:', getAvgRating());
            }}
          >
            Click me to see some sweet, sweet data...

          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
