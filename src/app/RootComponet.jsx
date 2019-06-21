import React, { Component } from 'react';
import NavbarComponent from './shared/NavbarComponent';
import ErrorHandler from './shared/ErrorHandler';

class RootComponet extends Component {
    render() {
        return (
            <div>
            <ErrorHandler>
                <NavbarComponent/>
            </ErrorHandler>
        </div>
        );
    }
}

export default RootComponet;