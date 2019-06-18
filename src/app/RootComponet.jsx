import React, { Component } from 'react';
import NavbarComponent from './shared/NavbarComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeComponet from './component/HomeComponet';

class RootComponet extends Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <HomeComponet></HomeComponet>
                {/*
                 <Route exact path="/" component={HomeComponet} />
                  <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} /> */}
            </div>
        );
    }
}

export default RootComponet;