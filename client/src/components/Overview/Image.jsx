import React, { useContext } from 'react';
import OverviewContext from './context.js';


const Image = () => {

  const { styles, currentStyle } = useContext(OverviewContext);

  if (currentStyle?.photos) {
    return (
    <section id="image">
      <h4>Sick Image of My Cool Island Style</h4>
      <img src={currentStyle.photos[0].url} />
    </section>
    )
  } else {
    return null;
  }

}

export default Image;