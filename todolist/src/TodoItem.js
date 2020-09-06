import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            task: this.props.task,
            editing: false,
            completed: false,
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEditRequest = this.handleEditRequest.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleRemove() {
        //call remove in parent component
        this.props.removeTodo(this.props.id);
    }

    handleEditRequest(){
        //toggle editing state
        this.setState({editing: !this.state.editing});
    }

    handleUpdate(evt){
        evt.preventDefault();
        //call edit function in parent component
        this.props.editTodo(this.state.task, this.props.id);
        //reset editing state
        this.setState({editing: false});
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value });
    }

    handleComplete(){
        this.setState({completed: ! this.state.completed});
    }


    render() {
        
        if(this.state.editing){
            return (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" 
                        value={this.state.task} 
                        name="task"
                        onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                <li className={this.state.completed? "complete": ""} onClick={this.handleComplete}>{this.props.task}</li>
                <button onClick={this.handleRemove}>Remove</button>
                <button onClick={this.handleEditRequest}>Edit</button>
            </div> 
            );
        }
        
           
        }  
      
    
}

export default TodoItem;