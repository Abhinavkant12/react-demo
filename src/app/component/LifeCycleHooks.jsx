import React, { Component } from 'react';

class Parent extends Component {
    constructor(props) {
        super(props);
        console.log("Parent - Ctor");
        this.state = { data: 0, flag: true };
        this.handleClick = this.handleClick.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    handleClick(e) {
        this.setState({ data: this.state.data + 1 });
    }

    handleLoad(e) {
        this.setState({ flag: !this.state.flag });
    }

    render() {
        console.log("Parent - Render");
        var child = this.state.flag ? null :
            <ChildComponent value={this.state.data} />

        return (
            <div>
                <h2 className="text-info">Parent Component</h2>
                <h2 className="text-info">{this.state.data}</h2>
                <button className="btn btn-info" onClick={this.handleClick}>Change</button>
                <button className="btn btn-info" onClick={this.handleLoad}>Load/Unload</button>
                <hr />
                {child}
            </div>
        );
    }
}

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        console.log("Child - Ctor");
        this.state = { data: 100 };
        this.handleClick = this.handleClick.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleClick(e) {
        this.setState({ data: this.state.data + 10 });
    }

    handleUpdate(e) {
        this.forceUpdate();
    }

    componentWillMount(){
        console.log("Child - componentWillMount");
    }

    componentDidMount(){
        console.log("Child - componentDidMount");
    }

    render() {
        console.log("Child - Render");
        return (
            <div>
                <h3 className="text-success">Child Component</h3>
                <h3 className="text-success">Parent Value: {this.props.value}</h3>
                <h3 className="text-success">Child State: {this.state.data}</h3>
                <button className="btn btn-success" onClick={this.handleClick}>Change</button>
                <button className="btn btn-success" onClick={this.handleUpdate}>Force Update</button>
            </div>
        );
    }

    componentWillReceiveProps(newProps) {
        console.log("Child - componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Child - shouldComponentUpdate");
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Child - componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Child - componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Child - componentWillUnmount");
    }
}

export default Parent;