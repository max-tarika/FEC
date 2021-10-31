import React from 'react';

import Stars from './Stars.jsx';

const Review = () => (
  <div id="review">
    <div id="reviewTopBar">
      <Stars />
      <div id="userAndDate">Username&amp;DatePosted</div>
    </div>
    <h3 id="reviewTitle">Review title/summary</h3>
    <p id="reviewBody">
      Review Body goes here. This is where we will be able to read abaout whether or not
      a particular reivew is helpful and/or island worthy.
    </p>
    <div id="helpfulAndReport">
      <p>Was this review island worthy, mon?</p>
      <ul>
        <li>
          Yes (#)
        </li>

        <li>
          No (#)
        </li>
        <li>
          Report
        </li>
      </ul>
    </div>
  </div>
);

export default Review;
