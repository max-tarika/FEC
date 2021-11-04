/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './components/Overview/Overview.jsx';
import Related from './components/Related/Related.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import AppContext from './context.js';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/products/',
    })
      .then((res) => {
        console.log(res.data);
        setCurrentProduct(res.data[0]);
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
