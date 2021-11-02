import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RelatedContext from './context';

const ProductCard = (props) =>
  // console.log('here are some props: ', props);
  (

    <div>
      <div className="default_image" />
      <p>Am I rendering anything???</p>
      <div className="product_info" />
      <div className="stars" />
    </div>
  );
export default ProductCard;
