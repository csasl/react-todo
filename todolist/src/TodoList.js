import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todos: [{task: "water plants"}, {task: "finish homework"}]
        };
    }

    render(){
        const todos = this.state.todos.map(todo=> {
            return<TodoItem task= {todo.task}/>
        });

        return(
            <div>
                <h1>Todo List</h1>
                <ul>
                    {todos}
                 </ul>
            </div>
            
        )
       
    }
}

export default TodoList;