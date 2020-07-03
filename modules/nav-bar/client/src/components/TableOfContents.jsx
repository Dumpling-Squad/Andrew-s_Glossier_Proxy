import React from 'react';

function TableOfContents(props) {
  return (
    <>
      <div className="tableOfContents-window" />
      <div className="tableOfContents">

        <button className="contentsClose" onClick={props.toggleTableOfContents}><img src="https://navbar-svg-icons.s3-us-west-1.amazonaws.com/close.svg" /></button>

        <div className="contentsBox">
          <div className="contents" id="contentCategories">
            <a>Shop All</a>
            <a>Skincare</a>
            <a>Makeup</a>
            <a>Body</a>
            <a>Fragrance</a>
            <a>Shop our Sets</a>
            <a>GlossiWEAR</a>
            <a>Digital Gift Card</a>
          </div>

          <div className="contents" id="contentCompany">
            <a>Looks IRL</a>
            <a>Into The Gloss</a>
            <a>About Glossier</a>
          </div>
        </div>

        <div className="shipToBox">
          <div className="shipToText">Shipping To:</div>
          <select className="selectShip">
            <option value="united states">United States</option>
            <option value="canada-en">Canada (EN)</option>
            <option value="canada-fr">Canada (FR)</option>
            <option value="united kingdom">United Kingdom</option>
            <option value="ireland">Ireland</option>
            <option value="sweden">Sweden</option>
            <option value="denmark">Denmark</option>
            <option value="france">France</option>
          </select>
        </div>

      </div>
    </>
  );
}

export default TableOfContents;
