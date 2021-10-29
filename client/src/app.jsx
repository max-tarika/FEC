import React from 'react';

import Overview from './components/Overview/Overview.jsx';
import Related from './components/Related/Related.jsx';
import Reviews from './components/Reviews/Reviews.jsx';

const App = () => (
  <div>
    <h1>Da Island Bois</h1>
    <Overview />
    <Related />
    <Reviews />
  </div>
);

export default App;
