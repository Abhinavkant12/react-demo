import React, { Component } from 'react';
import NavbarComponent from './shared/NavbarComponent';
// import { Route,Switch } from "react-router-dom";
import HomeComponet from './component/HomeComponet';
import CounterAssignment from './component/CounterComponent';
import DataFlowAssignment from './component/DataFlowAssignment';
import ControlledvsUncontrolled from './component/ControlledvsUncontrolled';
import ListCompoent from './component/ListCompoent';

class RootComponet extends Component {
    render() {
        return (
            <div>
                {/* <NavbarComponent /> 
                <DataFlowAssignment></DataFlowAssignment>
                <CounterAssignment></CounterAssignment>*/}
             
                {/* <HomeComponet></HomeComponet> */}
                {/* <ControlledvsUncontrolled></ControlledvsUncontrolled> */}
                <ListCompoent></ListCompoent>
            </div>
        );
    }
}

export default RootComponet;