import React, { Component } from 'react';

const Result = (props) => (
    <h2 className="text-info">Result: {props.result} </h2>
);

const Button = (props) => (
    <button className="btn btn-info ml-1" onClick={(e) => {
        props.handleClick(props.incBy, e);
    }}>
        Add {props.incBy}
    </button>
);

class DataFlowAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        };
        this.updateResult = this.updateResult.bind(this);
    }

    updateResult(By) {
        this.setState({ result: this.state.result + By });
    }

    render() {
        return (
            <div className="mb-5">
                <Result result={this.state.result} />
                <Button incBy={5} handleClick={this.updateResult} />
                <Button incBy={10} handleClick={this.updateResult} />
                <Button incBy={15} handleClick={this.updateResult} />
                <Button incBy={20} handleClick={this.updateResult} />
            </div>
        );
    }
}

export default DataFlowAssignment;