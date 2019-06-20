import React, { Component } from 'react';
import NavbarComponent from './shared/NavbarComponent';
// import { Route,Switch } from "react-router-dom";
import HomeComponet from './component/HomeComponet';
import CounterAssignment from './component/CounterComponent';
import DataFlowAssignment from './component/DataFlowAssignment';
import ControlledvsUncontrolled from './component/ControlledvsUncontrolled';
import ListCompoent from './component/ListCompoent';
import FormComponent from './component/FormComponent';
import PropTypeRoot from './component/PropType';
import Parent from './component/LifeCycleHooks';
import AjaxComponent from './component/AjaxComponent';
import ContextApiParent from './component/ContextApi';

class RootComponet extends Component {
    render() {
        return (
            <div>
                 <NavbarComponent /> 
                {/*<DataFlowAssignment></DataFlowAssignment>
                <CounterAssignment></CounterAssignment>*/}
             
                {/* <HomeComponet></HomeComponet> */}
                {/* <ControlledvsUncontrolled></ControlledvsUncontrolled> */}
                {/* <FormComponent></FormComponent>
                 <ListCompoent></ListCompoent> */}
                 {/* <PropTypeRoot></PropTypeRoot> */}
                 {/* <Parent></Parent> */}
                 {/*<AjaxComponent></AjaxComponent>*/}
                 <ContextApiParent/>
               
            </div>
        );
    }
}

export default RootComponet;