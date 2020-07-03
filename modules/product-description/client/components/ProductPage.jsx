import React from 'react';
import DetailPage from './DetailPage.jsx';

var ProductPage = (props) => {
  return (
    <img name={props.images.id} id ='img' src={props.images.image} onClick={props.select}></img>
    // <h2>{props.details.title}</h2>
  );
}

export default ProductPage;