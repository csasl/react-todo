import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        //call function in parent component
        this.props.createTodo({...this.state, id:uuidv4()}); 
        //reset form
        this.setState({task: ""}); 
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