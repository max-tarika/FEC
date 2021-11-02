/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';

import Overview from './components/Overview/Overview.jsx';
import Related from './components/Related/Related.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import AppContext from './context.js';

const axios = require('axios');

const App = () => {
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/products/',
    })
      .then((res) => {
        setCurrentProduct(res.data[1]);
      });
  }, []);

  return (
    <AppContext.Provider value={{
      currentProduct,
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
