import React from 'react';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <img id='shades' src={this.props.shade}></img>
      </div>
      // <h2>{props.details.title}</h2>
    );
  }
}

export default DetailPage;