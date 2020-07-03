import React from 'react';
import BestSellers from './BestSellers.jsx';

function LowerNav(props) {
  return (
    <div className="lower-nav">
      <div className="nav-bar-cat" id="shopAll" onMouseOver={props.onAllProducts} onMouseLeave={props.onMouseLeave}>
        Shop All
        {props.appState.shopAll ? <BestSellers id="shopAll" appState={props.appState} onMouseOver={props.onAllProducts} onMouseLeave={props.onMouseLeave} /> : <div />}
      </div>
      <div className="nav-bar-cat" id="skinCare" onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
        Skincare
        {props.appState.skinCare ? <BestSellers id="skinCare" appState={props.appState} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} /> : <div />}
      </div>
      <div className="nav-bar-cat" id="makeUp" onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
        Makeup
        {props.appState.makeUp ? <BestSellers id="makeUp" appState={props.appState} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} /> : <div />}
      </div>
      <div className="nav-bar-cat" id="body" onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
        Body
        {props.appState.body ? <BestSellers id="body" appState={props.appState} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} /> : <div />}
      </div>
      <div className="nav-bar-cat" id="fragrance" onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
        Fragrance
        {props.appState.fragrance ? <BestSellers id="fragrance" appState={props.appState} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} /> : <div />}
      </div>
      <div className="nav-bar-cat" id="shopOurSets" onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
        Shop our Sets
        {props.appState.shopOurSets ? <BestSellers id="shopOurSets" appState={props.appState} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} /> : <div />}
      </div>
      <div className="nav-bar-cat">
        GlossiWEAR
      </div>
      <div className="nav-bar-cat">
        Team Picks
      </div>
      <div className="nav-bar-cat">
        Take our Skincare Quiz
      </div>
    </div>
  );
}

export default LowerNav;
