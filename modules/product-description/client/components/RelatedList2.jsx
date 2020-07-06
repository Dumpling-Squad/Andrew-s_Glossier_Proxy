import React from 'react';

class RelatedList2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div id='containerAdd'>
          <img id='relatedPics2' src={this.props.pics} onClick={(e) => this.props.change(e)}></img>
          <div>
            <h3 id='containerTitle'>{this.props.title}</h3>
            <button id='addToBag'>Add to Bag - ${this.props.price}</button>
          </div>

        </div>
      </div>
    );
  }
}

export default RelatedList2;