import React, { Component } from 'react';

class ListCompoent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { id: '1', name: 'Abhinav Kant',designation:'Team Lead', salary: 15000 },
                { id: '2', name: 'Adrija kant',designation:'BA', salary: 2300 },
                { id: '3', name: 'Neha Sinha',designation:'Tester', salary: 20008 },
            ],
        };
    }
    render() {
        return (
            <div className="container">
                <ListTable Items={this.state.list}></ListTable>
            </div>
        );
    }
}
export default ListCompoent;

const ListTable = (props) => {
    var headers = Object.keys(props.Items[0]).map((keyName,index) => {
        return <td key={index}>{keyName}</td>
    });

    var Items = props.Items.map((item, index) => {
        console.log(item);
        return <tr key={index}>
            <td>{item[Object.keyName]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <td>{item[3]}</td>
        </tr>
    })
    return (
        <React.Fragment>
            <h3>List </h3>
            <table className="table table-dark">
                <tbody>
                <tr>
                   {headers}
                </tr>
                    {Items}
                </tbody>
            </table>
        </React.Fragment>
    );
};