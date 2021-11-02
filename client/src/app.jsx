/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';

import Overview from './components/Overview/Overview.jsx';
import Related from './components/Related/Related.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import AppContext from './context.js';

const axios = require('axios');

const App = () => {
  // const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState();
  const [ isLoading, setIsLoading ] = useState(false);
  // const [currentReview, setCurrentReview] = useState([]);

  useEffect(() => {
    // axios({
    //   method: 'GET',
    //   url: '/products/',
    // })
    //   .then((response) => {
    //     setProducts(response.data);
    //   });
    // axios({
    //   method: 'GET',
    //   url: '/reviews/meta/?product_id=44388',
    // })
    //   .then((res) => {
    //     setCurrentReview(res.data);
    //   });
    setIsLoading(true);
    axios({
      method: 'GET',
      url: '/products/',
    })
      .then((oneMoreRes) => {
        setCurrentProduct(oneMoreRes.data[0]);
        setIsLoading(false);
      });
  }, []);

  // const averageRating = (currentRatings) => {
  //   let sum = 0;
  //   let totalRatings = 0;
  //   Object.keys(currentRatings.ratings).forEach((rating) => {
  //     sum += rating * currentRatings.ratings[rating];
  //     totalRatings += Number(currentRatings.ratings[rating]);
  //   });
  //   return sum / totalRatings;
  // };
  return (
    <AppContext.Provider value={{
      currentProduct,
    }}
    >
      <div>
        <h1>Da Island Bois</h1>

        {isLoading
          ? <div>Da Island is Loading Ja</div>
          : <><Overview /><Related /><Reviews /><div>
            <form>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();

                  // console.log('ALL PRODUCTS:', products);
                  // console.log('CURRENT REVIEW DEETS:', currentReview);
                  console.log('CURRENT PRODUCT DEETS:', currentProduct);
                  // console.log('AVERAGE RATING:', averageRating(currentReview).toFixed(2));
                } }
              >
                Click me to see some sweet, sweet data...

              </button>
            </form>
          </div></>
        }
      </div>
    </AppContext.Provider>
  );
};

export default App;
