import React, { Component } from 'react';
import DataTable from '../shared/DataTable';
import ajaxHelper from '../services/ajaxHelper.service';

class AjaxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], message: "Loading data, please wait..." };
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-warning">{this.state.message}</h3>
                <DataTable items={this.state.posts}>
                    <h4 className="text-success">Posts Table</h4>
                </DataTable>
            </div>
        );
    }

    componentDidMount() {
        var promise = ajaxHelper.getAllPosts();
        promise.then((data) => {
            console.log(data);
            this.setState({ posts: [...data], message: "" });
        }, (eMsg) => {
            this.setState({ message: eMsg });
        })
    }

}

export default AjaxComponent;