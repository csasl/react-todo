import React, { Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {

    }

    render() {
        return(
        <div>
            <li>{this.props.task}</li>
            <button onClick={this.handleRemove}>Remove</button>
        </div> 
        );
      
    }
}

export default TodoItem;