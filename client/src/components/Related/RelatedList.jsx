import React, { useState, useEffect, useContext } from 'react';
import RelatedContext from './context';
import ProductCard from './ProductCard.jsx';
import Compare from './Compare.jsx';

const RelatedList = () => {
  const { relatedIds } = useContext(RelatedContext);
  const [showCompare, setShowCompare] = useState(false);

  useEffect(() => {

  }, [relatedIds]);

  return (
    <div>
      <div id="productCardContainer">
        {
      relatedIds.map((id) => <div id="productCard"><ProductCard key={id} id={id} /></div>)
      }
      </div>
      <RelatedContext.Provider value={{ showCompare }}>
        <div id="compareModal">
          <Compare />
        </div>
      </RelatedContext.Provider>
    </div>
  );
};

export default RelatedList;
