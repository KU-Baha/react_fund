import React from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1});
    }


    decrement() {
        this.setState({count: this.state.count - 1})
    }


    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>Current count: {this.state.count}</p>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
            </div>
        )
    }
}

export default ClassCounter