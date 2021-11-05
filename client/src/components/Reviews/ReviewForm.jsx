import React from 'react';

import AppContext from '../../context.js';

import Stars from './Stars.jsx';

const ReviewForm = () => {
  const placeholder = null;
  return (

    <div id="addReviewForm">

      <h1>Write Your Review</h1>
      <h3>About the [currentProductName]</h3>

      <div className="formElement">
        <p>Overall Rating:</p>
        <Stars average={0} />
      </div>

      <div className="formElement">
        <p>Do you reccomend this product?</p>
        <div>
          <input type="radio" id="absolutely" name="drone" value="absolutely" />
          <label htmlFor="absolutely">Yes, absolutely!</label>
        </div>
        <div>
          <input type="radio" id="noWay" name="drone" value="noWay" />
          <label htmlFor="noWay">No way!</label>
        </div>
      </div>
      <div className="formElement">

        <p>Product Characteristics: </p>

        <h3>Comfort:</h3>
        <span>
          <input type="radio" id="poor" name="drone" value="poor" />
          <label htmlFor="poor">Poor</label>
        </span>
        <span>
          <input type="radio" id="fair" name="drone" value="fair" />
          <label htmlFor="fair">Fair</label>
        </span>
        <span>
          <input type="radio" id="average" name="drone" value="average" />
          <label htmlFor="average">Average</label>
        </span>
        <span>
          <input type="radio" id="good" name="drone" value="good" />
          <label htmlFor="good">Good</label>
        </span>
        <span>
          <input type="radio" id="great" name="drone" value="great" />
          <label htmlFor="great">Great</label>
        </span>

        <h3>Fit:</h3>
        <span>
          <input type="radio" id="poor" name="drone" value="poor" />
          <label htmlFor="poor">Poor</label>
        </span>
        <span>
          <input type="radio" id="fair" name="drone" value="fair" />
          <label htmlFor="fair">Fair</label>
        </span>
        <span>
          <input type="radio" id="average" name="drone" value="average" />
          <label htmlFor="average">Average</label>
        </span>
        <span>
          <input type="radio" id="good" name="drone" value="good" />
          <label htmlFor="good">Good</label>
        </span>
        <span>
          <input type="radio" id="great" name="drone" value="great" />
          <label htmlFor="great">Great</label>
        </span>

        <h3>Length:</h3>
        <span>
          <input type="radio" id="poor" name="drone" value="poor" />
          <label htmlFor="poor">Poor</label>
        </span>
        <span>
          <input type="radio" id="fair" name="drone" value="fair" />
          <label htmlFor="fair">Fair</label>
        </span>
        <span>
          <input type="radio" id="average" name="drone" value="average" />
          <label htmlFor="average">Average</label>
        </span>
        <span>
          <input type="radio" id="good" name="drone" value="good" />
          <label htmlFor="good">Good</label>
        </span>
        <span>
          <input type="radio" id="great" name="drone" value="great" />
          <label htmlFor="great">Great</label>
        </span>

        <h3>Quality:</h3>
        <span>
          <input type="radio" id="poor" name="drone" value="poor" />
          <label htmlFor="poor">Poor</label>
        </span>
        <span>
          <input type="radio" id="fair" name="drone" value="fair" />
          <label htmlFor="fair">Fair</label>
        </span>
        <span>
          <input type="radio" id="average" name="drone" value="average" />
          <label htmlFor="average">Average</label>
        </span>
        <span>
          <input type="radio" id="good" name="drone" value="good" />
          <label htmlFor="good">Good</label>
        </span>
        <span>
          <input type="radio" id="great" name="drone" value="great" />
          <label htmlFor="great">Great</label>
        </span>
      </div>

      <div className="formElement">
        <h3>Review Summary: </h3>
        <input type="text" id="reviewSummary" maxLength="60" placeholder="Example: Best on the island!" />
      </div>

      <div className="formElement">
        <h3>Review Body: </h3>
        <textarea id="reviewBody" rows="5" cols="44" placeholder="Why did you like (or not like) the product?" />
      </div>

      <div className="formElement">
        <h3>User Photos: </h3>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            alert('This feature coming soon...');
          }}
        >
          Add a photo!

        </button>
      </div>
      <div className="formElement">
        <h3>What is your nickname?: </h3>
        <input type="text" id="reviewSummary" maxLength="60" placeholder="Example: islandBoi123" />
        <h5>**For privacy reasons, do not use your full name or email address</h5>
      </div>
    </div>
  );
};

export default ReviewForm;
