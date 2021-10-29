import React from 'react';

import Overview from './components/overview/Overview.jsx';
import Related from './components/related/Related.jsx';
import Reviews from './components/reviews/Reviews.jsx';

const App = () => (
  <div>
    <h1>Da Island Bois</h1>
    <Overview />
    <Related />
    <Reviews />
  </div>
);

export default App;
