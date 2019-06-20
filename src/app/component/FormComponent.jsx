import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { id: '', name: '', designation: '', salary: '' };

        //this.data;
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        var key = e.target.name;
        var value = e.target.value;
        var obj = { ...this.state };
       // obj[key] = obj[value];

        // const newlist = this.state.list.concat(obj);
         this.setState({ obj }, () => { console.log(this.state) });

    }

    save(event) {
        console.log(event.target.value);
        event.preventDefault();
        console.log("onSave handler called");

        // this.setState(state => {
        //     const list = state.list.concat(state.value);
        //     return {
        //         list,
        //         value: '',
        //     };
        // });
    }

    reset() {
        this.setState({}, () => {

        });
    }


    render() {
        const style1 = {
            width: '300px',
            margin: '0 0 0 14px'
        };
        const btn = {
            width: '150px',
            margin: '10px'
        }
        return (
            <div className="container">
            
                <div className="row">
                    <h2 className="text-info">Form Component</h2>
                </div>
                <div className="row">
                    <form onSubmit={this.save}>
                        <div className="row col-md-12 form-group">
                            ID <input type="text" name="id" style={style1} className="form-control" placeholder="Id" onChange={this.onChangeHandler} />
                        </div>
                        <div className="row col-md-12 form-group">
                            Name <input type="text" name="name" style={style1} placeholder="Name" className="form-control" onChange={this.onChangeHandler} />
                        </div>
                        <div className="row col-md-12 form-group">
                            Designation <input type="text" style={style1} className="form-control" name="designation" placeholder="Designation" onChange={this.onChangeHandler} />
                        </div>
                        <div className="row col-md-12 form-group">
                            Salary <input type="text" style={style1} className="form-control" name="salary" placeholder="Salary" onChange={this.onChangeHandler} />
                        </div>
                        <div className="row col-md-12">
                            <button type="submit" style={btn} className="btn btn-info btn-block" >Save</button>
                            <button style={btn} className="btn btn-info btn-block" onClick={this.reset}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormComponent;