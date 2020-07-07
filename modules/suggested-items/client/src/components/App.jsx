import React from 'react';
import axios from 'axios';
import Items from './Items.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      display: [],
      shades: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get('/products/suggested')
      .then((data) => {
        this.setState({
          items: data.data,
        });

        const randomProducts = [];
        for (let i = 0; i < 4; i += 1) {
          const min = Math.ceil(0);
          const max = Math.floor(100);
          randomProducts.push(data.data[Math.floor(Math.random() * (max - min + 1)) + min]);
        }
        this.setState({
          display: randomProducts,
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  render() {
    return (
      <div className="overlay">
        <div className="main">

          <h2 className="title">You may also like</h2>
          <div className="items-container">
            {this.state.display
              .map((item, index) => (
                <Items item={item} key={index} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
