import React from 'react';
import RelatedList from './RelatedList.jsx';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.setImages = this.setImages.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setImages, 300);
  }

  setImages() {
    var newArray = [];

    this.props.pics.map(pic => {
      newArray.push(pic);
    })

    this.setState({
      images: newArray
    })
  }


  render () {
    return (
      <div>
        {this.props.pics.map((pic, index) => (
          <RelatedList key={index} pics={pic} change={(e) => this.props.change(e)}/>
        ))}
      </div>
      // <h2>{props.details.title}</h2>
    );
  }
}

export default Related;