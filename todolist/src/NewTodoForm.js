import React, { Component } from 'react';

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTodo(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="New todo" name="task" id="task" value={this.state.task} onChange={this.handleChange}/>
                    <button>Add todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;