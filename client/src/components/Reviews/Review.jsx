import React from 'react';

const Review = () => (
  <div>
    <span id="stars">*****</span>
    <div id="userAndDate">Username&amp;DatePosted</div>
    <h3 id="reviewTitle">Review title</h3>
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
      </ul>
    </div>
  </div>
);

export default Review;
