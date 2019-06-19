import React, { Component } from 'react';

class ControlledvsUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "abhinav" };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onChangeHandler(e) {
        this.setState({ value: e.target.value });
    }

    handleClick(e) {
        this.setState({ value: this.refs.t1.value });
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-info">Controlled</h3>
                <input type="text" value={this.state.value} onChange={this.onChangeHandler}></input>
                <h5>Name: {this.state.value}</h5>

                <h3 className="text-info">UnControlled</h3>
                <input type="text" defaultValue={this.state.value} ref="t1"></input>
                <h5>Name: {this.state.value}</h5>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ControlledvsUncontrolled;