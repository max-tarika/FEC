import React, { useContext } from 'react';

import AppContext from '../../context.js';

import Stars from './Stars.jsx';

const ReviewForm = () => {
  const { currentProduct } = useContext(AppContext);
  const characteristicRatings = ['poor', 'fair', 'average', 'good', 'great'];
  const characteristicNames = ['Comfort', 'Fit', 'Length', 'Quality'];
  return (

    <div id="addReviewForm">

      <h1>Write Your Review</h1>
      <h3>
        About the
        {' '}
        <strong>{currentProduct.name}</strong>
      </h3>

      <div className="formElement overallRating">
        <p>Overall Rating:</p>
        <span className="chooseStars">
          <Stars average={0} />
        </span>
      </div>

      <div className="formElement doYouRec">
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

      <div className="formElement characteristics">

        <h3>Product Characteristics: </h3>

        {characteristicNames.map((characteristic) => (
          <span className="characteristic">
            <h3>
              {characteristic}
              :
            </h3>
            {characteristicRatings.map((rating) => (
              <span>
                <input type="radio" id={rating} name="drone" value={rating} />
                <label htmlFor={rating}>{rating[0].toUpperCase() + rating.slice(1)}</label>
              </span>
            ))}
          </span>
        ))}
      </div>

      <div className="formElement reviewSummary">
        <h3>Review Summary: </h3>
        <input type="text" id="reviewSummary" maxLength="60" placeholder="Example: Best on the island!" />
      </div>

      <div className="formElement reviewBody">
        <h3>Review Body: </h3>
        <textarea id="reviewBody" rows="5" cols="44" placeholder="Why did you like (or not like) the product?" />
      </div>

      <div className="formElement addPhoto">
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

      <div className="formElement userNickname">
        <h3>What is your nickname?: </h3>
        <input type="text" id="userNickname" maxLength="60" placeholder="Example: islandBoi123" />
        <h5>**For privacy reasons, do not use your full name or email address</h5>
      </div>

      <div className="formElement userEmail">
        <h3>What is your nickname?: </h3>
        <input type="text" id="userEmail" maxLength="60" placeholder="Example: islandBoi123@email.com" />
        <h5>**For authentication reassons, you will not be emailed</h5>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          alert('Review Submitted.... Just to nowhere');
        }}
      >
        Submit Review

      </button>

    </div>
  );
};

export default ReviewForm;
