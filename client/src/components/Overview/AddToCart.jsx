/* eslint-disable react/no-array-index-key */
import React, { useContext, useState } from 'react';
import { OverviewContext, AddToCartContext } from './context.js';
import SizeSelector from './SizeSelector.jsx';

const AddToCart = () => {
  const { currentStyle } = useContext(OverviewContext);
  // const [size, setSize] = useState();
  const skus = currentStyle?.skus;
  let skusArr;
  if (skus) {
    skusArr = Object.values(skus);
  } else {
    skusArr = null;
  }

  // console.log('current style: ', currentStyle);
  // console.log('current style skus: ', currentStyle?.skus);
  // console.log('current skus: ', skusArr, Array.isArray(skusArr));

  function handleSizeClick(e) {
    console.log('this is the event', e.target.value);
  }

  return (
    <AddToCartContext.Provider value={{ handleSizeClick }}>
      <div>
        <div id="sizeSelector">
          {skusArr
            ? (
              <select name="size" id="size" onChange={handleSizeClick}>
                <option selected="selected">Select Size</option>
                {skusArr.map((sku, index) => <option value={sku.size}>{sku.size}</option>)}
              </select>
            )
            : (
              <select name="size" disabled="disabled">
                <option>OUT OF STOCK</option>
              </select>
            )}
        </div>
      </div>
    </AddToCartContext.Provider>
  );
};

export default AddToCart;
