import React from 'react';
import axios from 'axios';
import LowerNav from './LowerNav.jsx';
import BestSellers from './BestSellers.jsx';
import SearchBar from './SearchBar.jsx';
import TableOfContents from './TableOfContents.jsx';

// import { render } from "react-dom";
// import SlidingPane from "react-sliding-pane";
// import "react-sliding-pane/dist/react-sliding-pane.css";
// import {CSSTransitionGroup}  from 'react-transition-group'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
      bestSellers: false,
      shopAll: false,
      skinCare: false,
      makeUp: false,
      body: false,
      fragrance: false,
      shopOurSets: false,
      search: false,
      tableOfContents: false,
      // isPaneOpen: false,
      products: [],
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onAllProducts = this.onAllProducts.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.untoggleSearchBar = this.untoggleSearchBar.bind(this);
    this.toggleTableOfContents = this.toggleTableOfContents.bind(this);
  }

  onMouseOver(e) {
    e.persist();
    axios
      .get(`/nav/${e.target.id}`)
      .then((results) => {
        this.setState({
          products: results.data,
          onHover: true,
          [e.target.id]: true,
        });
      })
      .catch((err) => {
        console.error('error getting product info from db', err);
      });
  }

  onAllProducts(e) {
    e.persist();
    axios
      .get('/nav')
      .then((results) => {
        this.setState({
          products: results.data,
          onHover: true,
          [e.target.id]: true,
        });
      })
      .catch((err) => {
        console.error('error getting product info from db', err);
      });
  }

  onMouseLeave(e) {
    // console.log(e.target);
    this.setState({
      onHover: false,
      [e.target.id]: false,
      products: [],
    });
  }

  toggleSearchBar() {
    console.log('toggle');
    this.setState({
      search: !this.state.search,
    });
  }

  untoggleSearchBar() {
    this.setState({
      search: !this.state.search,
    });
  }

  toggleTableOfContents() {
    this.setState({
      tableOfContents: !this.state.tableOfContents,
      isPaneOpen: !this.state.isPaneOpen,
    });
  }

  render() {
    return (
      <header>
          <div className="initiativeBar">
            Learn more about our&nbsp;
            <span>Grant Initiative</span>
&nbsp;for Black-Owned Businesses.
          </div>
          <div className="upper-nav">
            <div className="upper-left-nav">
              <img src="https://navbar-svg-icons.s3-us-west-1.amazonaws.com/menu.svg" id="icon" onClick={this.toggleTableOfContents} />

              {this.state.tableOfContents
                ? <TableOfContents toggleTableOfContents={this.toggleTableOfContents} />
                : null}

              <img src="https://navbar-svg-icons.s3-us-west-1.amazonaws.com/search.svg" className="search" id="icon" onClick={this.toggleSearchBar} />
              {this.state.search ? <SearchBar untoggleSearchBar={this.untoggleSearchBar} /> : null}
            </div>
            <div className="title">
              Glossier.
            </div>
            <div className="upper-right-nav">
              <li className="profile" id="icon">
                <img src="https://navbar-svg-icons.s3-us-west-1.amazonaws.com/profile.svg" />
              </li>
              <li className="nav-shopping-cart" id="icon">
                <img src="https://navbar-svg-icons.s3-us-west-1.amazonaws.com/bag.svg" />
              </li>
            </div>
          </div>
          <LowerNav appState={this.state} products={this.state.products} onAllProducts={this.onAllProducts} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} />
        </header>
    );
  }
}

export default App;
