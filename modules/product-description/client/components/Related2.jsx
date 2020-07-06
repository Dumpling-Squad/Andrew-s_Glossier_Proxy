import React from 'react';
import RelatedList2 from './RelatedList2.jsx';

class Related2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.setImages = this.setImages.bind(this);
  }

  componentDidMount() {
    // setTimeout(this.setImages, 500);
  }

  setImages() {
    // const newArray = [];

    // this.props.pics.map((pic) => {
    //   newArray.push(pic);
    // });

    this.setState({
      images: this.props.pics,
    });
    console.log(this.state.images);
  }

  render() {
    return (
      <div>
        {this.props.pics.map((pic, index) => (
          <RelatedList2 key={index} pics={pic} title={this.props.title} price={this.props.price} />
        ))}
      </div>
      // <h2>{props.details.title}</h2>
    );
  }
}

export default Related2;
