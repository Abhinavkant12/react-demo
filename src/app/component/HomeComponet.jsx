import React, { Component } from 'react';

class HomeComponet extends Component {
    render() {
        const style1 = {
            padding: '10px',
            margin: '10px',
            color: '#28a745'
        };

        return (
            <div style={style1}>
                <h2>Home Component</h2>
            </div>
        );
    }
}

export default HomeComponet;