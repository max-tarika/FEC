/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';
import { OverviewContext, AddToCartContext } from './context.js';

const AddToCart = () => {
  const { currentStyle } = useContext(OverviewContext);
  const [sku_id, setSku] = useState();
  const [skuQuants, setSkuQuants] = useState();
  const [sizeSelected, setSizeSelected] = useState(false);
  const [skuQuant, setSkuQuant] = useState();
  const [inStock, setInStock] = useState(false);

  const skusArr = currentStyle?.skus ? Object.entries(currentStyle?.skus) : null;

  // console.log('current style: ', currentStyle);
  // console.log('current style skus: ', currentStyle?.skus);
  // console.log('current skus: ', skusArr);

  const createQuantsArray = (sku) => {
    const num = currentStyle?.skus[sku].quantity <= 15 ? currentStyle?.skus[sku].quantity : 15;
    const quantsArray = [];

    for (let i = 1; i <= num; i += 1) {
      quantsArray.push(i);
    }
    setSkuQuants(quantsArray);
  };

  const handleSizeClick = (e) => {
    setSku(e.target.value);
    createQuantsArray(e.target.value);
    setSizeSelected(true);
  };

  const handleQuantClick = (e) => {
    setSkuQuant(e.target.value);
  };

  useEffect(() => {
    if (skusArr?.[0][0] === 'null' || skusArr === null) {
      setInStock(false);
    } else {
      setInStock(true);
    }
  }, [currentStyle]);

  return (
    <AddToCartContext.Provider value={{ handleSizeClick }}>
      <div>
        <div id="sizeSelector">
          {inStock
            ? (
              <select name="size" className="size" onChange={handleSizeClick}>
                <option selected="selected">Select Size</option>
                {skusArr.map((sku) => <option value={sku[0]} key={sku[0]}>{sku[1].size}</option>)}
              </select>
            )
            : (
              <select name="size" className="size" disabled="disabled">
                <option>OUT OF STOCK</option>
              </select>
            )}
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
        <div id="addToCart">
          <button type="button">Add To Bag</button>
        </div>
      </div>
    </AddToCartContext.Provider>
  );
};

export default AddToCart;
