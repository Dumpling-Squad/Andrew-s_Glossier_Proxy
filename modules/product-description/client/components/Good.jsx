import React from 'react';

var Good = (props) => {
  return (
    <div id = 'icons'>
      <img id='icon' src={props.good.icons}></img>
      <h2 id='goodToKnow'>{props.good.goodToKnow}</h2>
    </div>
  );
}

export default Good;