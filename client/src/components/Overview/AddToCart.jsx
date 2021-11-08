/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { OverviewContext } from './context.js';
import SizeDropdown from './SizeDropdown.jsx';

const AddToCart = () => {
  const { currentStyle } = useContext(OverviewContext);
  const [sku_id, setSku] = useState();
  const [skuQuants, setSkuQuants] = useState();
  const [sizeSelected, setSizeSelected] = useState(false);
  const [skuQuant, setSkuQuant] = useState();
  const [inStock, setInStock] = useState(false);
  const [selectedSize, setSelectedSize] = useState('Select Size');
  const [open, setOpen] = useState(false);
  const [askForSize, setAskForSize] = useState(false);
  const skusArr = currentStyle?.skus ? Object.entries(currentStyle?.skus) : null;

  const createQuantsArray = (sku) => {
    const num = currentStyle?.skus[sku].quantity <= 15 ? currentStyle?.skus[sku].quantity : 15;
    const quantsArray = [];

    for (let i = 1; i <= num; i += 1) {
      quantsArray.push(i);
    }
    setSkuQuants(quantsArray);
  };

  const handleSizeClick = (e) => {
    setSelectedSize(e.target.title);
    setOpen(!open);
    createQuantsArray(e.target.value);
    setAskForSize(false);
    setSku(e.target.value);
    setSkuQuant(1);
    setSizeSelected(true);
  };

  const handleQuantClick = (e) => {
    setSkuQuant(e.target.value);
  };

  const openSizeSelector = () => {
    setOpen(!open);
  };

  const handleAddToBagClick = () => {
    if (!sizeSelected) {
      setOpen(true);
      setAskForSize(true);
    } else {
      for (let i = 0; i < skuQuant; i += 1) {
        axios.post('/cart', { sku_id });
      }
    }
  };

  useEffect(() => {
    if (skusArr?.[0][0] === 'null' || skusArr === null) {
      setInStock(false);
    } else {
      setInStock(true);
    }
    setSizeSelected(false);
    setSelectedSize('Select Size');
  }, [currentStyle]);

  return (
    <div>
      <div id="selectorContainer">
        <div id="sizeSelector">
          {inStock
            ? (
              <div>
                {askForSize && <div id="askForSize">Please Select Size</div>}
                <button id="sizeButton" type="button" onClick={openSizeSelector}>{selectedSize}</button>
                {open && <SizeDropdown skusArr={skusArr} handleSizeClick={handleSizeClick} />}
              </div>
            )
            : <div>OUT OF STOCK</div>}
        </div>
        <div id="quantitySelector">
          {sizeSelected
            ? (
              <select name="quantity" className="quantity" onChange={handleQuantClick}>
                {skuQuants.map((quant) => <option value={quant} key={quant}>{quant}</option>)}
              </select>
            )
            : (
              <select name="quantity" className="quantity" disabled="disabled">
                <option>-</option>
              </select>
            )}
        </div>
      </div>
      <div id="addToCart">
        {inStock && <button id="addToCartButton" type="button" onClick={handleAddToBagClick}>Add To Bag</button>}
      </div>
    </div>
  );
};

export default AddToCart;
