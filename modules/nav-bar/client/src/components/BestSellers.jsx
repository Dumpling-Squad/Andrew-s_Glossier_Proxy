import React from 'react';

function BestSellers(props) {
  return (
    <div className="dropdown-bestsellers" id={props.id} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
      <h5 className="bestsellers-text" id={props.id}>Bestsellers</h5>

      <ul className="bestseller-products" id={props.id}>
        {props.appState.products.slice(0, 6).map((product) => (
          <li className="bestseller-product" id={props.id}>
            <img className="bestseller-image" src={product.image} id={props.id} />
            <a className="bestseller-name" id={props.id}>{product.name}</a>
            <a className="bestseller-description" id={props.id}>{product.description}</a>
          </li>
        ))}
      </ul>

      <a className="view-all-button" id={props.id}>
        {
        props.id === 'shopOurSets' ? 'View All Sets'
          : props.id === 'makeUp' ? 'View All Makeup'
            : props.id === 'body' ? 'View All Body'
              : props.id === 'fragrance' ? 'View All Fragrance'
                : props.id === 'skinCare' ? 'View All Skin'
                  : 'View All'
        }
      </a>

    </div>
  );
}

export default BestSellers;
