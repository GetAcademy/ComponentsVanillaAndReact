import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  componentDidMount() {
    this.counterElement.addEventListener('countChange', (event) => {
      console.log(`Tellerendring fanget av React: ${event.detail.newValue}`);
    });
  }

  render() {
    return (
      <div ref={(el) => (this.counterElement = el)}>
        <p>Teller: {this.state.value}</p>
        <button onClick={this.handleIncrement}>Øk telleren</button>
      </div>
    );
  }
}

export default ClickCounter;
