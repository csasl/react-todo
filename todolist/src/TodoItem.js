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
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleEditRequest(){
        this.setState({editing: !this.state.editing});
    }


    render() {
        
        if(this.state.editing){
            return (
                <div>
                    <form>
                        <input type="text" value={this.state.task} name="task"/>
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