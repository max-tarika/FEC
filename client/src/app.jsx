import React, { useState, useEffect } from 'react';

import Overview from './components/Overview/Overview.jsx';
import Related from './components/Related/Related.jsx';
import Reviews from './components/Reviews/Reviews.jsx';

const axios = require('axios');



const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('here we are');
    axios({
      method: 'GET',
      url: '/products/'
    })
    .then((response) => {
      console.log(response.data);
      setProducts(response.data);
    })
    .then(console.log('products:', products))
  }, []);

  return (
    <div>
      <h1>Da Island Bois</h1>
      <Overview />
      <Related />
      <Reviews />
    </div>
  );
};

export default App;
