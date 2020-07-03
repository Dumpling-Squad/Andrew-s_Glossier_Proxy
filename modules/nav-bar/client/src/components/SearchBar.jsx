import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchProducts: [],
      popularSearches: [],
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.popularSearchesLoad = this.popularSearchesLoad.bind(this);
  }

  changeHandler(e) {
    e.persist();
    this.setState({
      searchQuery: e.target.value,
    });
    axios
      .get(`/nav/search/${e.target.value}`)
      .then((results) => {
        this.setState({
          searchProducts: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  popularSearchesLoad() {
    axios
      .get('/nav')
      .then((results) => {
        this.setState({
          popularSearches: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.popularSearchesLoad();
  }

  render() {
    return (
      <div className="searchBar">
        <button className="close" onClick={this.props.untoggleSearchBar}><img src="https://navbar-svg-icons.s3-us-west-1.amazonaws.com/close.svg" /></button>

        <input id="searchInput" onChange={this.changeHandler} value={this.state.searchQuery} />
        {/* if searchQuery is not empty, change the content in this component */}
        {this.state.searchQuery
          ? (
            <div>
              <div className="searchProductsCount">
                {this.state.searchProducts.length}
                {' '}
                results
              </div>
              {this.state.searchProducts.length === 0
                ? (
                  <div className="searchResults">
                    Your search for
                    {' '}
                    {this.state.searchQuery}
                    {' '}
                    didn’t return any results.
                  </div>
                )
                : (
                  <div className="searchResults">
                    {this.state.searchProducts.map((product, index) => {
                      { console.log('render', product); }
                      return (
                        <div key={index} className="searchProduct">
                          <img className="searchImage" src={product.image} />
                          <a className="searchName">{product.name}</a>
                          <a className="searchDescription">{product.description}</a>
                        </div>
                      );
                    })}
                  </div>
                )}
            </div>
          )
          : (
            <div id="searchBarInitial">
              <p>Search for products, categories, content</p>
              <div className="mostPopularText">most popular searches</div>
              {/* render some key words from the database */}

              <div>
                {this.state.popularSearches.slice(0, 7).map((product) => (
                  <div className="popularProducts">
                    {product.name}
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default SearchBar;
