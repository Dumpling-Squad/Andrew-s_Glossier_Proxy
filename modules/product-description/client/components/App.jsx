import React from 'react';
import axios from 'axios';
import ProductPage from './ProductPage.jsx';
import CurrentPage from './CurrentPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      details: [],
      additional: [],
      productId: 0,
      productPage: true,
      currentPage: false,
    };
    this.getImages = this.getImages.bind(this);
    this.getProductId = this.getProductId.bind(this);
  }

  componentDidMount() {
    this.getProductId();
  }

  getImages() {
    axios.get('/images')
      .then((result) => {
        this.setState({
          images: result.data,
        });
      })
      .then(
        axios.get('/product')
          .then((result) => {
            this.setState({
              details: result.data,
            });
          })
          .then(
            axios.get('/details')
              .then((result) => {
                this.setState({
                  additional: result.data,
                  productPage: false,
                  currentPage: true,
                });
              }),
          ),
      );
  }

  getProductId() {
    axios
      .get('/productId')
      .then((data) => {
        this.setState({
          productId: data.data.productId,
        });
      })
      .then(() => {
        this.getImages();
      });
  }

  render() {
    if (this.state.productPage === true) {
      return (
        <div id="ProductPage">
          <img src="https://static.impression.co.uk/2014/05/loading1.gif" />
        </div>
      );
    }

    if (this.state.currentPage === true) {
      return (
        <div>
          <CurrentPage productId={this.state.productId} details={this.state.details[this.state.productId - 1]} add={this.state.additional[this.state.productId - 1]} shades={this.state.additional} />
        </div>
      );
    }
  }
}

export default App;
