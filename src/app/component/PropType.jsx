import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PTComponent extends Component {
    render() {
        var name = this.props.ename.toUpperCase();
        return (
            <div>
                <h4 className="text-info">Hello, {name}</h4>
                <h5 className="text-info">Age is, {this.props.age}</h5>
            </div>
        );
    }

    // static get defaultProps() {
    //     return {
    //         ename: "na"
    //     }
    // }

    static get displayName(){
        return "PropTypeComponent";
    }

    static get propTypes() {
        return {
            ename: PropTypes.string.isRequired,
            // age: PropTypes.number.isRequired
            age: function (props, propName, componentName) {
                if (!props[propName]) {
                    return new Error(`${componentName} --- ${propName}, is required.`)
                } if (props[propName] < 30) {
                    return new Error(`${componentName} --- ${propName}, must be greater than 30.`)
                }
            }
        };
    }
}


class PropTypeRoot extends Component {
    render() {
        return (
            <div>
                <PTComponent ename={"Abhinav kant"} age={46} />
            </div>
        );
    }
}

export default PropTypeRoot;