import React from 'react';
import ProductPage from './ProductPage.jsx';
import CurrentPage from './CurrentPage.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      details: [],
      additional: [],
      id: Math.floor(Math.random() * 100),
      productPage: true,
      currentPage: false
    };
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    axios.get('/images')
      .then(result => {
        this.setState ({
          images: result.data,
        });
      })
      .then(
        axios.get('/product')
          .then(result => {
            this.setState ({
              details: result.data,
            });
          })
          .then(
            axios.get('/details')
              .then(result => {
                this.setState ({
                  additional: result.data,
                  productPage: false,
                  currentPage: true
                });
              })
          )
      );
  }

  render() {
    if (this.state.productPage === true) {
      return (
        <div id = 'ProductPage'>
          <img src='https://static.impression.co.uk/2014/05/loading1.gif'></img>
        </div>
      );
    }

    if (this.state.currentPage === true) {
      return (
        <div>
          <CurrentPage id={this.state.id} details={this.state.details[this.state.id - 1]} add={this.state.additional[this.state.id - 1]} shades={this.state.additional}/>
        </div>
      );
    }
  }
}

export default App;