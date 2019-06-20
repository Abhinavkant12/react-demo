import React, { Component } from 'react';
import DataTable from '../shared/DataTable';
import ajaxHelper from '../services/ajaxHelper.service';

const { Provider, Consumer } = React.createContext();

class ContextApiParent extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], message: "Loading data, please wait..." };
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-warning">{this.state.message}</h3>
                <Provider value={this.state.posts}>
                    <ChildOneComponent />
                </Provider>
            </div>
        );
    }

    componentDidMount() {
        var promise = ajaxHelper.getAllPosts();
        promise.then((data) => {
            this.setState({ posts: [...data], message: "" });
        }, (eMsg) => {
            this.setState({ message: eMsg });
        })
    }

}

class ChildOneComponent extends Component {
    render() {
        return (
            <div>
                <ChildTwoComponent />
            </div>
        );
    }
}

class ChildTwoComponent extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {
                        (data) =>
                            <DataTable items={data}>
                                <h4 className="text-success">ContextApi - Provider, Consumer --> stop the prop forwading/prop Drilling</h4>
                            </DataTable>
                    }
                </Consumer>
            </div>
        );
    }
}

export default ContextApiParent;