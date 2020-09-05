import React, { Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            task: this.props.task,
            editing: false
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEditRequest = this.handleEditRequest.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
                <li>{this.props.task}</li>
                <button onClick={this.handleRemove}>Remove</button>
                <button onClick={this.handleEditRequest}>Edit</button>
            </div> 
            );
        }
        
           
        }  
      
    
}

export default TodoItem;