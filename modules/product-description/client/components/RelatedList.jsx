import React from 'react';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <img id='relatedPics' src={this.props.pics} onClick={(e) => this.props.change(e)}></img>
    );
  }
}

export default RelatedList;