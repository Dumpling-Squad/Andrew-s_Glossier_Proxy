import React from 'react';
import axios from 'axios';
import ReviewHighlights from './ReviewHighlights/ReviewHighlights.jsx';
import DetailPage from './DetailPage.jsx';
import Good from './Good.jsx';
import Related from './Related.jsx';
import Related2 from './Related2.jsx';
import Accordion from './Accordion.jsx';

class CurrentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      amount: 1,
      ingredient: '',
      shades: [],
      related: [],
      relatedPics: [],
      relatedPics2: [],
      goodArray: [],
    };
    this.setImage = this.setImage.bind(this);
    this.getShades = this.getShades.bind(this);
    this.changePic = this.changePic.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.goodTo = this.goodTo.bind(this);
  }

  componentDidMount() {
    this.setImage();
    this.getShades();
    this.goodTo();
  }

  setImage() {
    axios.get(`/images/${this.props.productId}`)
      .then((result) => {
        this.setState({
          image: result.data[0].image,
        });
      })
      .then(() => {
        axios.get(`/product/${this.props.details.title}`)
          .then((result) => {
            this.setState({
              related: result.data,
            });
            // console.log('related log1:', this.state.related);
          })
          .then(() => {
            // console.log('related log2:', this.state.related);
            for (let i = 0; i < 6; i += 1) {
              axios.get(`/images/${this.state.related[i].id}`)
                .then((result) => {
                  this.setState((state) => ({
                    relatedPics: state.relatedPics.concat(result.data[0].image),
                  }));
                });
            }
          })
          .then(() => {
            for (let i = 0; i < 2; i += 1) {
              axios.get(`/images/${this.state.related[i].id}`)
                .then((result) => {
                  this.setState((state) => ({
                    relatedPics2: state.relatedPics2.concat(result.data[0].image),
                  }));
                });
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);
          });
      });
  }

  getShades() {
    let num = 0;
    const array = [];

    this.props.shades.map((shade) => {
      if (num < 6) {
        array.push(shade.shades);
        num += 1;
      }
    });

    this.setState({
      shades: array,
    });
  }

  changePic(e) {
    this.setState({
      image: e.target.src,
    });
  }

  changeAmount(e) {
    const num = this.state.amount;

    if (e.target.name === '-' && num > 0) {
      this.setState({
        amount: (num - 1),
      });
    }

    if (e.target.name === '+') {
      this.setState({
        amount: (num + 1),
      });
    }
  }

  goodTo() {
    const array = [];
    const newArray = [];
    const count = 0;

    for (let i = 0; i < 4; i++) {
      const num = Math.floor(Math.random() * 10);
      array.push(this.props.shades[num]);
    }

    for (let a = array.length - 1; a >= 0; a--) {
      for (let b = array.length - 1; b >= 0; b--) {
        if (array[a] == array[b] && a != b) {
          delete array[b];
        }
      }
      if (array[a] != undefined) {
        newArray.push(array[a]);
      }
    }

    this.setState({
      goodArray: newArray,
    });
  }

  render() {
    return (
      // <img src={this.setImage}></img>
      <div className="main-wrapper_inner">
        <div className="gutter-left" />
        <div className="productImage">
          <div id="relatedContainer">
            <Related pics={this.state.relatedPics} change={(e) => this.changePic(e)} />
          </div>
          <div width="369px">
            <img id="currentImage" src={this.state.image} />
          </div>
        </div>

        <div className="productHighlights-wrapper">
          <div className="currentHeading">
            <h1 id="currentTitle">{this.props.details.title}</h1>
            <h2 id="currentSubtitle">{this.props.details.subTitle}</h2>
          </div>
          <h2 id="currentSub">
            A new generation of {this.props.details.title.toLowerCase()}
          </h2>
          <div id="whatContainer">
            <span id="currentWhat">What it is: </span>
            <span id="what">{this.props.details.description}</span>
          </div>
          <h3 id="currentSpecial">
            Why It's Special:
            <br />
          </h3>
          <ul>
            <li id="bullet">{this.props.details.specialty}</li>
          </ul>
          <h3 id="currentKnow">Good To Know:</h3>
          <div id="iconContainer">
            {this.state.goodArray.map((know, index) => (
              <Good
                key={index}
                good={know}
              />
            ))}
          </div>
          <p id="tested">Dermatologist tested, appropriate for all skin types, provides long-lasting moisture, formulated without fragrance</p>
          <div id="shadeTiles">
            {this.state.shades.map((shade, index) => (
              <DetailPage
                key={index}
                shade={shade}
              />
            ))}
          </div>
          <div id="purchaseLine">
            <div id="amountBox">
              <button name="-" id="minusButton" onClick={(e) => this.changeAmount(e)}>-</button>
              <h2 id="amountState">{this.state.amount}</h2>
              <button name="+" id="plusButton" onClick={(e) => this.changeAmount(e)}>+</button>
            </div>
            <button id="purchase">
              <h2 id="purchaseText">
                Add to Bag - $
                {(this.props.details.price * this.state.amount)}
              </h2>
            </button>
          </div>
          <div id="free">
            <h3 id="firstFree">Free & Easy Returns </h3>
            <h3> • Free Sample with order</h3>
          </div>
          <ReviewHighlights productId={this.props.productId} />
          <div className="SetsContainer">
            <h5 id="saveSets">Save with sets</h5>
            <div id="relatedContainer2">
              <Related2 pics={this.state.relatedPics2} title={this.props.details.subTitle} price={this.props.details.price} />
            </div>
          </div>
          {/* <Conditional ingredients={this.props.details.ingredients} howTo={this.props.details.howTo}/> */}
          <Accordion title="Ingredients" body={this.props.details.ingredients} />
          <Accordion title="How to Use" body={this.props.details.howTo} />
        </div>
      </div>
    );
  }
}

export default CurrentPage;
