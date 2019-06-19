import React, { Component } from 'react';
import PropsComponent from '../shared/propsComponent';
import { Button } from 'react-bootstrap';

class StateComponent extends Component {
    constructor() {
        super();
        this.state = {
            person: [
                { id: 1, name: 'Abhinav Kant', age: 30 },
                { id: 2, name: 'Jimit Shah', age: 27 },
        ]
        };
        console.log(this.state);
    }
    changeStateHandler = (e) => {
//         this.setState(state => {
//             const list = state.list.filter(item => item.id !== id);
//             return {
//         list,
//       };
// });
        this.setState(
{
            person: [
                { id: 1, name: 'Abhinav Kant', age: 30 },
                { id: 2, name: 'Jimit Shah', age: 27 },
        ]
    }
            , () => {
                console.log(" -- state Change --");
                console.log(this.state.person);
            });
    }

render() {
    return (
        <div className="container">
            <Button variant="primary" onClick={this.changeStateHandler.bind(this)}>Change State</Button>
            <PropsComponent name={this.state.person[0].name} age={this.state.person[0].age}></PropsComponent>
            <PropsComponent name={this.state.person[1].name} age={this.state.person[1].age}>I am Chlidren props</PropsComponent>
        </div>
    );
}
}

export default StateComponent;