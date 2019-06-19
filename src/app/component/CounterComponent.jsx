import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.clickCount = 0;
    this.state = { count: 0, flag: false };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.reset = this.reset.bind(this);
  }

  inc(e) {
    this.setState({ count: this.state.count + this.props.interval }, () => {
      this.manageClickCount();
    });
  }

  dec(e) {
    this.setState({ count: this.state.count - this.props.interval }, () => {
      this.manageClickCount();
    });
  }

  manageClickCount() {
    this.clickCount += 1;
    if (this.clickCount > 9) {
      this.setState({ flag: true }, () => {
        this.props.onMax(this.state.flag);
      });
    }
  }

  reset() {
    this.clickCount = 0;
    this.setState({ count: 0, flag: false }, () => {
      this.props.onMax(this.state.flag);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h2 className="text-info">Counter Component</h2>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <input type="text" className="form-control" value={this.state.count} readOnly />
            </div>
            <div className="col-sm-1">
              <button className="btn btn-info btn-block" onClick={this.inc}
                disabled={this.state.flag}>+</button>
            </div>
            <div className="col-sm-1">
              <button className="btn btn-info btn-block" onClick={this.dec}
                disabled={this.state.flag}>-</button>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-info btn-block" onClick={this.reset}
                disabled={!this.state.flag}>Reset</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  static get defaultProps() {
    return {
      interval: 1
    };
  }
}

class CounterAssignment extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.state = { message: "" };
    this.p_reset = this.p_reset.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  p_reset() {
    // console.log(this.childRef);
    this.childRef.current.reset();
  }

  updateMessage(flag) {
    if (flag)
      this.setState({ message: "Max Click Reached, click Reset..." });
    else
      this.setState({ message: "" });
  }

  render() {
    return (
      <div>
        {this.state.message ? <h4 className="alert alert-danger">{this.state.message}</h4> : null}
        <Counter ref={this.childRef} onMax={this.updateMessage} />
        <br />
        <div className="row">
          <div className="col-sm-2">
            <button className="btn btn-warning btn-block" onClick={this.p_reset}>Parent Reset</button>
          </div>
        </div>
        {/* <Counter />
                <Counter interval={10} /> */}
      </div>
    );
  }
}

export default CounterAssignment;