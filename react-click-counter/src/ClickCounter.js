import React, { Component } from 'react';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.startValue, triggerValue: props.triggerValue };
        this.triggerValueReached = props.triggerValueReached;
    }

    handleIncrement = () => {
        this.setState(prevState => {
            const state = { ...prevState, value: prevState.value + 1 };
            if (state.value >= state.triggerValue) {
                this.triggerValueReached(state.value);
            }
            return state;
        });
    };

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
