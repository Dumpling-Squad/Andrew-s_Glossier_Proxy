import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      accordionOpen: !this.state.accordionOpen
    });
  }

  render() {
    if (this.state.accordionOpen) {
      return (
        <div className='accordionContainer-open'>
          <div className='accordionHeading'>
            <h3>{this.props.title}</h3>
            <button className='accordionButton' name='-' onClick={this.handleClick}>-</button>
          </div>
          <p className='accordionContent'>{this.props.body}</p>
        </div>
      );
    } else {
      return (
        <div className='accordionContainer'>
          <div className='accordionHeading'onClick={this.handleClick}>
            <h3>{this.props.title}</h3>
            <button className='accordionButton'>+</button>
          </div>
        </div>
      );
    }

  }
}
export default Accordion;