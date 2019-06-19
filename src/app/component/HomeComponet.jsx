import React, { Component } from 'react';
import StateComponent from './StateComponent';

class HomeComponet extends Component {
    render() {
        const style1 = {
            padding: '10px',
            margin: '10px',
            color: '#28a745'
        };

        return (
            <div>
                <h2 style={style1}>Home Component</h2>
                <StateComponent></StateComponent>
                
           </div>
        );
    }
}

export default HomeComponet;