import React, { Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            task: this.props.task
        }
    }
    render() {
        return(
        <div>
            <li>{this.props.task}</li>
        </div> 
        )
      
    }
}

export default TodoItem;